<script setup lang="ts">
import { MaybeRef } from "@vueuse/core";
import Hls from "hls.js";
import type { Ref } from "vue";

const useVideostream2 = (
  videoRef: Ref<HTMLVideoElement | null>,
  src: MaybeRef<string>
) => {
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
      hls.value.stopLoad();
      hls.value.detachMedia();
      hls.value.destroy();
    }
    hls.value = new Hls({
      // debug: true,
      manifestLoadingRetryDelay: 3000,
      manifestLoadingMaxRetry: Infinity,
      progressive: true,
    });
    hls.value.attachMedia(videoRef.value);
    hls.value.on(Hls.Events.MEDIA_ATTACHED, () => {
      hls.value.loadSource(url.value);
    });
    hls.value.on(Hls.Events.MANIFEST_PARSED, () => {
      levels.value = stringify(hls.value.levels);
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

const video = ref<HTMLVideoElement | null>(null);

const urls = [
  "https://sb.err.ee/live/etv.m3u8",
  "https://sb.err.ee/live/etv2.m3u8",
  "https://sb.err.ee/live/etvpluss.m3u8",
  "https://streaming.elektron.art/hls/xxx.m3u8",
  "https://icareus-eu18-live.secure2.footprint.net/suitelive/ngrp:123636901/playlist.m3u8",
];
const url = ref(urls[0]);
const { levels } = useVideostream2(video, url);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">Lab</Button>
    <Title>Video</Title>
    <div class="cursor-pointer font-mono" v-for="u in urls" @click="url = u">
      {{ u }}
    </div>
    <Textarea v-model="url" />
    <video
      ref="video"
      class="aspect-video w-1/2"
      autoplay
      playsinline
      crossorigin="anonymous"
      loop
      muted
      controls
    />
    <pre class="font">{{ levels }}</pre>
  </Stack>
</template>
