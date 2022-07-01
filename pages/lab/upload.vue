<script setup lang="ts">
const url = "https://sb.err.ee/live/etvpluss.m3u8";

const video = ref<HTMLVideoElement>();
const canvas = ref<HTMLCanvasElement>();
const { width, height } = useVideostream(video, url);
const { capture, frame, context } = useVideocapture(
  video,
  canvas,
  width,
  height
);

const { getFiles, uploadFile } = useFiles();

const { data: files, refresh } = await getFiles();

const save = async () => {
  await uploadFile(randomFilename("jpg"), frame.value.src);
  await refresh();
};
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Link left to="/lab">Lab</Link>
    <Title>New capture</Title>
    <div class="flex gap-2">
      <Button @click="capture">Capture</Button>
      <Button @click="save">Save</Button>
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
        <img v-if="frame" :src="frame.src" />
      </div>
    </div>
    <Title>Previous captures</Title>
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
