<script setup lang="ts">
import { useIntervalFn } from "@vueuse/core";

const url = "https://sb.err.ee/live/etvpluss.m3u8";

const video = ref<HTMLVideoElement>();
const canvas = ref<HTMLCanvasElement>();
const { width, height } = useVideostream(video, url);
const { capture, frame } = useVideoframe(video, canvas, width, height);

const { getFiles, uploadFile } = useFiles();

const { data: files, refresh } = await getFiles();

const save = async () => {
  await uploadFile(randomFilename("jpg"), frame.value.src);
  await refresh();
};

useIntervalFn(refresh, 1000 & 10);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Link left to="/lab">Lab</Link>
    <Title>New capture</Title>
    <canvas ref="canvas" class="hidden" />
    <div class="grid gap-8 md:grid-cols-2">
      <div class="">
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
      <div class="aspect-video">
        <img v-if="frame" :src="frame.src" />
      </div>
    </div>
    <div class="flex gap-4">
      <Button primary @click="capture">Capture</Button>
      <Button primary @click="save">Save</Button>
    </div>
    <Title>Previous captures</Title>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <CaptureTransition>
        <img
          v-for="file in files"
          :key="file.filename"
          :src="file.src"
          class="w-full"
          @click="frame.src = file.src"
        />
      </CaptureTransition>
    </div>
  </Stack>
</template>
