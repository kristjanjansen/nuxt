<script setup lang="ts">
import { useMediaControls } from "@vueuse/core";
import IconMuted from "~icons/radix-icons/speaker-off";
import IconUnmuted from "~icons/radix-icons/speaker-loud";

// Page data

const { data: frontpage, error: frontpageError } = useFrontPage();

// Video

const video = ref<HTMLVideoElement | null>(null);
const { muted } = useMediaControls(video, {
  src: frontpage.value?.background.url || "",
});

onMounted(() => (muted.value = true));

// Upcoming events data

const event1 = computed(() => {
  return frontpage.value?.events?.length ? frontpage.value.events[0] : null;
});

const event2 = computed(() => {
  return frontpage.value?.events?.length >= 2
    ? frontpage.value.events[1]
    : null;
});

const d = useDraggables({
  event1: { x: 250, y: 250 },
  event2: { x: 600, y: 150 },
});

// Utilities

const { theme } = useTheme();
const { lang } = useLang();
</script>

<template>
  <ErrorCard v-if="frontpageError" />
  <div v-else class="relative h-full">
    <video
      ref="video"
      loop
      muted
      autoplay
      playsinline
      class="h-full w-full flex-col object-cover"
      :class="[['', 'invert'][theme]]"
    />
    <Breadboard class="bg-black/80" />
    <Stack class="absolute top-4 left-4 right-4 gap-4 md:top-6 md:left-6">
      <Content
        class="w-auto font-title text-xl text-white md:w-[30vw] md:text-2xl"
        :content="frontpage?.descriptions[lang]"
      />
      <Draggable v-if="event1" v-bind="d.event1">
        <FrontpageEvent :event="event1" />
      </Draggable>
      <Draggable v-if="event2" v-bind="d.event2">
        <FrontpageEvent :event="event2" />
      </Draggable>
    </Stack>
    <button
      class="fixed bottom-0 left-1 rounded-full p-3"
      @click.stop="muted = !muted"
    >
      <IconMuted v-if="muted" class="h-4 w-4" />
      <IconUnmuted v-if="!muted" class="h-4 w-4" />
    </button>
    <Dock :draggables="d" class="!left-12" />
  </div>
</template>
