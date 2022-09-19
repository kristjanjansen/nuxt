<script setup lang="ts">
import IconCapture from "~icons/radix-icons/camera";

const url = "https://sb.err.ee/live/etvpluss.m3u8";

const video = ref<HTMLVideoElement>();
const canvas = ref<HTMLCanvasElement>();
const { width, height } = useVideostream(video, url);
const { capture: captureFrame, frame } = useVideoframe(
  video,
  canvas,
  width,
  height
);

const { getFiles, uploadFile } = useFiles();

const path = "tmp";

const { data: files, refresh } = await getFiles(path);

const capture = async () => {
  captureFrame();
  await uploadFile(path, randomFilename("jpg"), frame.value.src);
  await refresh();
};
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">Lab</Button>
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
          crossorigin="anonymous"
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
      <RechargingButton @click="capture">
        <IconCapture />
        Capture
      </RechargingButton>
    </div>
    <Title>Previous captures</Title>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <MoveTransition>
        <img
          v-for="file in files"
          :key="file.filename"
          :src="file.src"
          class="w-full"
          @click="frame.src = file.src"
        />
      </MoveTransition>
    </div>
  </Stack>
</template>
