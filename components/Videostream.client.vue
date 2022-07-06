<script setup lang="ts">
import { useFullscreen, useIdle, useMediaControls } from "@vueuse/core";

import IconMuted from "~icons/radix-icons/speaker-off";
import IconUnmuted from "~icons/radix-icons/speaker-loud";
import IconEnterPip from "~icons/ph/picture-in-picture";
import IconExitPip from "~icons/ph/picture-in-picture-fill";
import IconEnterFullscreen from "~icons/radix-icons/enter-full-screen";
import IconExitFullscreen from "~icons/radix-icons/exit-full-screen";

type Props = {
  url: string;
};
const { url } = defineProps<Props>();

const video = ref<HTMLVideoElement | null>(null);
const videoWrapper = ref(null);

useVideostream(video, url);
const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(videoWrapper);
const { isPip, toggle: togglePip } = usePip(video);

const { muted } = useMediaControls(video);
onMounted(() => (muted.value = true));

const { idle } = useIdle(5000);
defineExpose({ video });
</script>

<template>
  <div class="relative flex items-center bg-black" ref="videoWrapper">
    <video
      class="w-full"
      ref="video"
      autoplay
      playsinline
      crossorigin="anonymous"
      loop
    />
    <FadeTransition>
      <div
        class="absolute right-2 bottom-2 left-4 grid grid-cols-[1fr_auto] items-center"
        v-if="!idle"
      >
        <div v-if="isFullscreen">
          <slot />
        </div>
        <div class="flex w-full justify-end">
          <button
            class="transform rounded-full p-3 transition-all hover:bg-neutral-100/20"
            @click="muted = !muted"
          >
            <IconMuted v-if="muted" class="text-neutral-100" />
            <IconUnmuted v-if="!muted" class="text-neutral-100" />
          </button>
          <button
            class="rounded-full p-3 transition-all hover:bg-neutral-100/20"
            @click="togglePip"
          >
            <IconExitPip v-if="isPip" class="text-neutral-100" />
            <IconEnterPip v-if="!isPip" class="text-neutral-100" />
          </button>
          <button
            class="rounded-full p-3 transition-all hover:bg-neutral-100/20"
            @click="toggleFullscreen"
          >
            <IconExitFullscreen v-if="isFullscreen" class="text-neutral-100" />
            <IconEnterFullscreen
              v-if="!isFullscreen"
              class="text-neutral-100"
            />
          </button>
        </div>
      </div>
    </FadeTransition>
  </div>
</template>
