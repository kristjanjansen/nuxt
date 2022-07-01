<script setup lang="ts">
import { useInterval } from "@vueuse/core";

//const url = "https://cloudflare.tv/hls/live.m3u8";
const url = "https://sb.err.ee/live/etvpluss.m3u8";

const currentFrame = useInterval(200);
const video = ref<HTMLVideoElement>();
const canvas = ref<HTMLCanvasElement>();
const { width, height, status } = useVideostream(video, url);
const { capture, frame, frames, context } = useVideocapture(
  video,
  canvas,
  width,
  height
);

const res = ref();

const { getFiles, uploadFile } = useFiles();

const save = async () => {
  await uploadFile(randomFilename("jpg"), frame.value.src);
};

console.log(randomFilename("jpg"));

const { data: files } = await getFiles();
console.log(files.value);
const clear = () => {
  context.value.clearRect(0, 0, width.value, height.value);
  frames.value = [];
  res.value = null;
};
</script>

<template>
  <div class="grid gap-8 p-4 md:grid-cols-2 md:p-6">
    <Stack class="col-span-2">
      <Link left to="/lab">Lab</Link>
      <Title>useVideocapture</Title>
      <p>Status: {{ status }}</p>
      <div class="flex gap-2">
        <Button @click="capture">Capture</Button>
        <Button @click="save">Save</Button>
        <Button @click="clear">Clear</Button>
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
    <canvas ref="canvas" class="hidden" />
    <div class="grid aspect-video border">
      <img
        v-if="frames.length"
        :src="frames[currentFrame % frames.length].src"
        class=""
      />
    </div>
    <img v-if="res?.src" :src="res.src" class="border" />
  </div>
</template>
