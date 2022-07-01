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
const { data: files, refresh } = await getFiles();

const save = async () => {
  await uploadFile(randomFilename("jpg"), frame.value.src);
  await refresh();
};

const clear = () => {
  context.value.clearRect(0, 0, width.value, height.value);
  frames.value = [];
  res.value = null;
};
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Link left to="/lab">Lab</Link>
    <Title>Capture and Save</Title>
    <Title small>New capture</Title>
    <div class="flex gap-2">
      <Button @click="capture">Capture</Button>
      <Button @click="save">Save</Button>
      <Button @click="clear">Clear</Button>
    </div>
    <canvas ref="canvas" class="hidden" />
    <div class="grid gap-8 md:grid-cols-2">
      <div class="border">
        <video
          ref="video"
          muted
          autoplay
          controls
          playsinline
          :width="width / 2"
          :height="height / 2"
          class="aspect-video w-full"
        />
      </div>
      <div class="aspect-video border">
        <img
          v-if="frames.length"
          :src="frames[currentFrame % frames.length].src"
          class=""
        />
      </div>
    </div>
    <Title small>Captures</Title>

    <div class="grid grid-cols-6 gap-4">
      <CaptureTransition>
        <img
          v-for="file in files"
          :key="file.filename"
          :src="file.src"
          class="w-full"
        />
      </CaptureTransition>
    </div>
  </Stack>
</template>
