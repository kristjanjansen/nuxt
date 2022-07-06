<script setup lang="ts">
import { useMediaControls } from "@vueuse/core";
import IconPlay from "~icons/ph/play-circle-thin";
import IconPause from "~icons/ph/pause-circle-thin";
import IconCircle from "~icons/ph/circle-fill";

type Props = {
  url: string;
};
const { url } = defineProps<Props>();

const video = ref<HTMLVideoElement | null>(null);

const { status } = useVideostream(video, url);

const { muted } = useMediaControls(video);
onMounted(() => (muted.value = true));
</script>

<template>
  <div>
    <video
      ref="video"
      class="h-0 w-full"
      autoplay
      playsinline
      crossorigin="anonymous"
      loop
    />
    <div>
      <div class="relative flex h-20 justify-center">
        <IconCircle
          class="absolute h-20 w-20"
          :class="[
            !muted ? 'scale-125 animate-pulse blur-xl' : '',
            status === 'playing' ? 'animate-pulse' : '',
          ]"
        />
        <IconCircle class="absolute h-20 w-20 text-black/50" />
        <IconPlay
          v-if="muted"
          class="absolute h-20 w-20"
          @click="muted = false"
        />
        <IconPause
          v-if="!muted"
          class="absolute h-20 w-20"
          @click="muted = true"
        />
      </div>
    </div>
  </div>
</template>
