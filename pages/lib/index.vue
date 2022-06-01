<script setup lang="ts">
const url = "https://cloudflare.tv/hls/live.m3u8";
const { videoRef, status, width, height } = useVideostream(url);
</script>

<template>
  <div class="p-8">
    <p>Status: {{ status }}</p>
    <video
      muted
      autoplay
      controls
      ref="videoRef"
      :width="width"
      :height="height"
    />
  </div>
</template>

<style scoped>
.Videostream {
  display: grid;
  gap: var(--gap-4);
  padding: var(--p-4);
}
</style>
