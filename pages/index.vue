<script setup lang="ts">
import { useIntervalFn, useMediaControls } from "@vueuse/core";
import IconMuted from "~icons/radix-icons/speaker-off";
import IconUnmuted from "~icons/radix-icons/speaker-loud";

// Page data

const { data: frontpage, error: frontpageError } = await useFrontPage();

// Video

const video = ref<HTMLVideoElement | null>(null);
const { muted, playing } = useMediaControls(video, {
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

// Podcast

const { data: podcast } = usePodcast();

const d = useDraggables({
  event1: { x: 200, y: 250, titles: ["Upcoming event", "Tulekul"] },
  // event2: { x: 400, y: 150 },
  podcast: { x: 300, y: 300, titles: ["Podcast", "Taskuhääling"] },
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
    <Breadboard
      class="transition duration-1000"
      :class="
        playing
          ? 'bg-black/70 backdrop-blur-none'
          : 'bg-black/100 backdrop-blur-xl'
      "
    />
    <Stack class="absolute top-4 left-4 right-4 gap-4 md:top-6 md:left-6">
      <Title class="w-auto text-gray-400 md:w-[40vw]">
        {{ frontpage?.descriptions[lang] }}
      </Title>
      <Draggable
        v-if="podcast?.items?.length"
        v-bind="d.podcast"
        class="p-4 md:w-[40vw]"
      >
        <PodcastEpisode :episode="podcast.items[0]" />
      </Draggable>
      <Draggable v-if="event1" v-bind="d.event1" class="md:w-[30vw]">
        <FrontpageEvent :event="event1" />
      </Draggable>
      <!-- <Draggable v-if="event2" v-bind="d.event2" class="md:w-[30vw]">
        <FrontpageEvent :event="event2" />
      </Draggable> -->
    </Stack>
    <button
      class="fixed top-11 right-2 rounded-full p-3"
      @click.stop="muted = !muted"
    >
      <IconMuted v-if="muted" class="h-4 w-4" />
      <IconUnmuted v-if="!muted" class="h-4 w-4" />
    </button>
    <Dock :draggables="d" />
  </div>
</template>
