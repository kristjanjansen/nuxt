<script setup lang="ts">
const url = "https://cloudflare.tv/hls/live.m3u8";
const video = ref<HTMLVideoElement>();
const canvas = ref<HTMLCanvasElement>();
const src = ref("");
const { width, height, status } = useVideostream(video, url);
const { capture, getJpeg } = useVideocapture(video, canvas, width, height);
const save = () => (src.value = getJpeg());
</script>

<template>
  <div class="grid grid-cols-2">
    <div>
      <video
        ref="video"
        muted
        autoplay
        controls
        :width="width / 2"
        :height="height / 2"
        class="w-full"
      />
    </div>
    <canvas ref="canvas" class="w-full" />
    <img :src="src" class="h-full w-full" />
    <div>
      <p>Status: {{ status }}</p>
      <button @click="capture">Capture</button>
      <button @click="save">Save</button>
    </div>
  </div>
</template>
