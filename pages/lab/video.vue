<script setup lang="ts">
import Hls from "hls.js";
import type { Ref } from "vue";
const useVideostream = (
  videoRef: Ref<HTMLVideoElement | null>,
  src: string
) => {
  if (Hls.isSupported()) {
    var hls = new Hls({
      debug: true,
      manifestLoadingRetryDelay: 3000,
      manifestLoadingMaxRetry: Infinity,
      progressive: true,
    });
    hls.loadSource(src);
    hls.attachMedia(videoRef.value);
    hls.on(Hls.Events.MEDIA_ATTACHED, () => {
      videoRef.value.muted = true;
      videoRef.value.play();
    });
    hls.on(Hls.Events.ERROR, (_, data) => {
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            hls.startLoad();
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            hls.recoverMediaError();
            break;
          default:
            hls.destroy();
            break;
        }
      }
    });
  } else if (videoRef.value.canPlayType("application/vnd.apple.mpegurl")) {
    videoRef.value.src = src;
    videoRef.value.addEventListener("canplay", function () {
      videoRef.value.play();
    });
  }
};
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">Lab</Button>
    <Title>Video</Title>
  </Stack>
</template>
