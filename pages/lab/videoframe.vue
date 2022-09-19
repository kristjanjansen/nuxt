<script setup lang="ts">
import { useInterval } from "@vueuse/core";

//const url = "https://cloudflare.tv/hls/live.m3u8";
const url = "https://sb.err.ee/live/etvpluss.m3u8";

const currentFrame = useInterval(200);
const video = ref<HTMLVideoElement>();
const canvas = ref<HTMLCanvasElement>();
const { width, height } = useVideostream(video, url);
const { capture, frames, context } = useVideoframe(
  video,
  canvas,
  width,
  height
);
const clear = () => {
  frames.value = [];
  context.value.clearRect(0, 0, width.value, height.value);
};
</script>

<template>
  <div class="grid gap-8 p-4 md:grid-cols-2 md:p-6">
    <Stack>
      <Button small left to="/lab">Lab</Button>
      <Title>Videoframes</Title>
      <div class="flex gap-2">
        <Button @click="capture">Add new frame</Button>
        <Button @click="clear">Clear all frames</Button>
      </div>
    </Stack>
    <div class="border">
      <video
        ref="video"
        muted
        autoplay
        controls
        playsinline
        :width="width / 2"
        :height="height / 2"
        class="w-full"
      />
    </div>
    <canvas ref="canvas" class="block w-full border" />
    <div class="grid aspect-video border">
      <img
        v-if="frames.length"
        :src="frames[currentFrame % frames.length].src"
        class=""
      />
    </div>
  </div>
</template>
