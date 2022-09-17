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
  controls?: boolean;
};
const { url, controls = false } = defineProps<Props>();

const video = ref<HTMLVideoElement | null>(null);
const videoWrapper = ref(null);

useVideostream(video, url);

const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(videoWrapper);
const { isPip, toggle: togglePip } = usePip(video);

const muted = ref(true);

const { idle } = useIdle(5000);
</script>

<template>
  <div class="relative flex items-center bg-black" ref="videoWrapper">
    <video
      ref="video"
      :muted="muted"
      :controls="controls"
      autoplay
      playsinline
      crossorigin="anonymous"
      loop
      class="w-full"
    />
    <FadeTransition>
      <div
        v-if="!idle"
        class="absolute right-2 left-4 grid grid-cols-[1fr_auto] items-center"
        :class="controls ? 'hidden' : 'bottom-2'"
      >
        <div>
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
