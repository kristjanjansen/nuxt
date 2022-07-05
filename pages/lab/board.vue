<script setup lang="ts">
import { useIdle } from "@vueuse/core";

const url = "https://sb.err.ee/live/etv.m3u8";
const video = ref<HTMLVideoElement>();
const { width, height } = useVideostream(video, url);
const showVideo = ref(false);
const blur = ref(0);

const { theme } = useTheme();

const draggables = useDraggables({
  first: { x: 200, y: 200, dockable: false },
});
</script>
<template>
  <div class="relative h-full">
    <FadeTransition>
      <video
        v-if="showVideo"
        ref="video"
        muted
        autoplay
        playsinline
        :width="width / 2"
        :height="height / 2"
        class="h-full w-full flex-col object-cover"
        :class="[['', 'invert'][theme]]"
      />
    </FadeTransition>
    <Breadboard
      v-if="showVideo"
      class="bg-black/80"
      :style="{ backdropFilter: 'blur(' + blur + 'px)' }"
    />
    <Breadboard v-else class="bg-gray-900" />
    <Stack class="absolute top-4 left-4 right-4 gap-4 md:top-6 md:left-6">
      <Link left to="/lab">lab</Link>
      <Title>Video breadboard</Title>
      <Button @click="showVideo = !showVideo">
        Video: {{ showVideo ? "on" : "off" }}
      </Button>
      <div>Blur:</div>
      <input type="range" v-model="blur" />
      <Draggable v-bind="draggables.first" class="p-16 text-center">
        Draggable
      </Draggable>
    </Stack>
  </div>
</template>

<style>
input[type="range"] {
  @apply accent-green-500;
}
</style>
