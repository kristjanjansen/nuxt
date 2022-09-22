<script setup lang="ts">
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
        :class="controls ? 'top-2' : 'bottom-2'"
      >
        <div>
          <slot />
        </div>
        <div class="flex w-full justify-end">
          <IconButton @click="muted = !muted">
            <IconMuted v-if="muted" />
            <IconUnmuted v-if="!muted" />
          </IconButton>
          <IconButton @click="togglePip">
            <IconExitPip v-if="isPip" />
            <IconEnterPip v-if="!isPip" />
          </IconButton>
          <IconButton @click="toggleFullscreen">
            <IconExitFullscreen v-if="isFullscreen" />
            <IconEnterFullscreen v-if="!isFullscreen" />
          </IconButton>
        </div>
      </div>
    </FadeTransition>
  </div>
</template>
