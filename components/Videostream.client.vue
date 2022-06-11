<script setup lang="ts">
import { useFullscreen, useMediaControls } from "@vueuse/core";

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

const video = ref(null);
const videoWrapper = ref(null);

useVideostream(video, url);
const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(videoWrapper);
const { isPip, toggle: togglePip } = usePip(video);

const { muted } = useMediaControls(video);
muted.value = false;
</script>

<template>
  <div class="relative" ref="videoWrapper">
    <video class="w-full" ref="video" autoplay playsinline />
    <div class="absolute right-2 bottom-2 flex">
      <button
        class="rounded-full p-3 transition-all hover:bg-neutral-100/20"
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
        <IconEnterFullscreen v-if="!isFullscreen" class="text-neutral-100" />
      </button>
    </div>
  </div>
</template>
