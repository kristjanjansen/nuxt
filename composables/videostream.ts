import { Ref, ref, watch, onMounted, onUnmounted } from "vue";
import Hls from "hls.js";
import type { MaybeRef } from "@vueuse/core";

// Although the video player supports "paused" status
// it is not currently supported, since is not that useful
// for live streams

type VideostreamStatus = "nodata" | "loading" | "playing";

export const useVideostreamLegacy = (
  videoRef: Ref<HTMLVideoElement | null>,
  src: MaybeRef<string>,
  autoReconnect = false
) => {
  const videoSrc = ref(src);
  const status = ref<VideostreamStatus>("nodata");

  // Initial resolution, we update it when we get the
  // the video stream metadata
  const width = ref(640);
  const height = ref((640 * 9) / 16);

  // Automatic reconnect delay
  const reconnectDelay = 10 * 1000;
  const timeoutDelay = 500;

  // hls.js placeholder
  let hls: Hls;

  watch(
    [videoRef, videoSrc],
    () => {
      if (videoRef.value) {
        if (videoRef.value.canPlayType("application/vnd.apple.mpegURL")) {
          playSafariHls();
        } else {
          if (Hls.isSupported()) {
            playHls();
          }
        }
      }
    },
    { immediate: true }
  );

  // Safari plays HLS natively, we just add
  // reconnect logic
  const playSafariHls = () => {
    if (videoRef.value) {
      videoRef.value.src = videoSrc.value;

      // Reconnect logic
      if (autoReconnect) {
        let prevEnd = 0;
        setInterval(() => {
          if (videoRef.value) {
            if (videoRef.value.seekable.length >= 1) {
              const currentEnd = videoRef.value.seekable.end(0);
              if (prevEnd === currentEnd) {
                videoRef.value.src = videoSrc.value;
                videoRef.value.play();
              }
              prevEnd = currentEnd;
            }
          }
        }, reconnectDelay);
      }
    }
  };

  // Non-Safary players need to use hls.js
  const playHls = () => {
    if (videoRef.value) {
      hls = new Hls({
        debug: false,
        manifestLoadingRetryDelay: 3000,
        manifestLoadingMaxRetry: Infinity,
        xhrSetup: function (xhr) {
          xhr.addEventListener("error", (e) => {
            hls.loadSource(videoSrc.value);
            hls.startLoad();
            if (videoRef.value) {
              videoRef.value.play();
            }
          });
        },
      });

      //@ts-ignore
      hls.attachMedia(videoRef.value);
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(videoSrc.value);
        hls.startLoad();
      });
      hls.on(Hls.Events.ERROR, (e, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              setTimeout(() => {
                hls.startLoad();
              }, timeoutDelay);
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              setTimeout(() => {
                hls.recoverMediaError();
              }, timeoutDelay);
              break;
          }
        }
      });

      // Reconnect logic
      if (autoReconnect) {
        let prevEnd = 0;
        setInterval(() => {
          if (videoRef.value) {
            if (videoRef.value.seekable.length >= 1) {
              const currentEnd = videoRef.value.seekable.end(0);
              if (prevEnd === currentEnd) {
                hls.loadSource(videoSrc.value);
                hls.startLoad();
                if (videoRef.value) {
                  videoRef.value.play();
                }
              }
              prevEnd = currentEnd;
            }
          }
        }, reconnectDelay);
      }
    }
  };

  onMounted(() => {
    if (videoRef.value) {
      videoRef.value.addEventListener("loadeddata", (e) => {
        status.value = "loading";
        setVideoSize();
      });

      videoRef.value.addEventListener("playing", (e) => {
        status.value = "playing";
        // Different browsers emit the video size data
        // on different events so we duplicate
        setVideoSize();
      });

      videoRef.value.addEventListener("ended", (e) => {
        status.value = "nodata";
      });
    }
  });

  onUnmounted(() => {
    if (hls) {
      hls.destroy();
    }
  });

  const setVideoSize = () => {
    width.value =
      videoRef.value && videoRef.value.videoWidth > 0
        ? videoRef.value?.videoWidth
        : -1;
    height.value =
      videoRef.value && videoRef.value.videoHeight > 0
        ? videoRef.value?.videoHeight
        : -1;
  };

  return { status, width, height };
};

export const useVideostream = (
  videoRef: Ref<HTMLVideoElement | null>,
  src: MaybeRef<string>
) => {
  const RETRY_DELAY = 3000;
  let hls = shallowRef(null);
  const videoSrc = ref(src);
  const levels = ref(null);

  const playSafariHls = () => {
    if (videoRef.value) {
      videoRef.value.src = videoSrc.value;
      videoRef.value.play();
    }
  };

  const playHls = () => {
    if (hls.value) {
      hls.value.detachMedia();
      hls.value.destroy();
      hls.value = null;
      levels.value = null;
    }
    hls.value = new Hls({
      manifestLoadingRetryDelay: RETRY_DELAY,
      manifestLoadingMaxRetry: Infinity,
      // xhrSetup: (xhr) => {
      //   xhr.addEventListener("error", (e) => {
      //     hls.value.loadSource(videoSrc.value);
      //     hls.value.startLoad();
      //     if (videoRef.value) {
      //       videoRef.value.play();
      //     }
      //   });
      // },
    });
    hls.value.attachMedia(videoRef.value);
    hls.value.on(Hls.Events.MEDIA_ATTACHED, () => {
      hls.value.loadSource(videoSrc.value);
    });
    hls.value.on(Hls.Events.MANIFEST_PARSED, () => {
      levels.value = hls.value.levels;
    });
  };

  watch(
    [videoRef, videoSrc],
    () => {
      if (videoRef.value) {
        if (videoRef.value.canPlayType("application/vnd.apple.mpegURL")) {
          playSafariHls();
        } else {
          if (Hls.isSupported()) {
            playHls();
          }
        }
      }
    },
    { immediate: true }
  );
  return { levels };
};
