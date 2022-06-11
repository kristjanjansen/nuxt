<script setup lang="ts">
import { useDraggable } from "@vueuse/core";
const url =
  "https://le21.babahhcdn.com/bb1150-le/x_live_1_c1.smil/playlist.m3u8";
const video = ref();
const { width, height, status } = useVideostream(video, url);
const el = ref<HTMLElement | null>(null);

const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
});
</script>

<template>
  <Stack class="relative grid h-full p-4 md:place-items-center md:p-6">
    <Breadboard />
    <Link class="md:absolute md:top-5 md:left-5" left to="/podcast">
      Back to event
    </Link>
    <div
      :style="style"
      class="fixed z-10 w-fit touch-none select-none overflow-hidden rounded border border-white"
    >
      <div ref="el" class="border-b px-2 py-1">Video</div>
      <video
        ref="video"
        muted
        autoplay
        controls
        :width="width / 3"
        :height="height / 3"
      />
    </div>
  </Stack>
</template>
