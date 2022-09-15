<script setup lang="ts">
import { useMediaControls } from "@vueuse/core";
import IconPlay from "~icons/ph/play-circle-thin";
import IconPause from "~icons/ph/pause-circle-thin";
import IconCircle from "~icons/ph/circle-fill";

type Props = {
  url: string;
};
const { url } = defineProps<Props>();

const audio = ref<HTMLVideoElement | null>(null);

useVideostream(audio, url);

const { playing } = useMediaControls(audio);
</script>

<template>
  <div class="flex justify-center px-4">
    <audio
      ref="audio"
      class="hidden"
      autoplay
      playsinline
      controls
      crossorigin="anonymous"
      loop
    />
    <div>
      <div class="relative flex h-20 justify-center">
        <IconCircle
          class="absolute h-20 w-20"
          :class="[playing ? 'scale-125 animate-pulse blur-xl' : 'opacity-0']"
        />
        <IconCircle class="absolute h-20 w-20 scale-95 text-black" />
        <IconPlay
          v-if="!playing"
          class="absolute h-20 w-20"
          @click="playing = true"
        />
        <IconPause
          v-if="playing"
          class="absolute h-20 w-20"
          @click="playing = false"
        />
      </div>
    </div>
  </div>
</template>
