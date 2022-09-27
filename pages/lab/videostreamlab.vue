<script setup lang="ts">
definePageMeta({
  labTitle: "Videostream",
  labIntro: "Testing new version of reactive video player",
  labGroup: "Video",
});

const video = ref<HTMLVideoElement | null>(null);

const urls = [
  "https://sb.err.ee/live/etv.m3u8",
  "https://sb.err.ee/live/etv2.m3u8",
  "https://sb.err.ee/live/etvpluss.m3u8",
  "https://cloudflare.tv/hls/live.m3u8",
  "https://streaming.elektron.art/hls/xxx.m3u8",
  "https://icareus-eu18-live.secure2.footprint.net/suitelive/ngrp:123636901/playlist.m3u8",
];
const url = ref(urls[0]);
const { levels } = useVideostream(video, url);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">Lab</Button>
    <Title>Videostream</Title>
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
