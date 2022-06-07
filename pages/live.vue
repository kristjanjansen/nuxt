<script setup lang="ts">
const url = "https://cloudflare.tv/hls/live.m3u8";
const video = ref();
const { videoRef, width, height, status } = useVideostream(video, url);
</script>

<template>
  <div class="grid grid-cols-[1fr_2fr] p-5">
    <p>Status: {{ status }}</p>
    <video
      muted
      autoplay
      controls
      ref="videoRef"
      :width="width / 2"
      :height="height / 2"
      class="w-full"
    />
  </div>
</template>
