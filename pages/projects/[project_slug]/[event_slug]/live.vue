<script setup lang="ts">
import { useDraggable } from "@vueuse/core";
const route = useRoute();
const slug = route.params.event_slug;

const { data: event } = await useEventBySlug(slug);

//const url = "https://le21.babahhcdn.com/bb1150-le/x_live_1_c1.smil/playlist.m3u8"
const url = "https://sb.err.ee/live/etv.m3u8";

const video = ref();
const { width, height } = useVideostream(video, url);

const top = ref("video");

const videoPanel = ref<HTMLElement | null>(null);

const { style: videoStyle, isDragging: isVideoDragging } = useDraggable(
  videoPanel,
  {
    initialValue: { x: 40, y: 40 },
    onStart: () => (top.value = "video"),
  }
);

const aboutPanel = ref<HTMLElement | null>(null);

const { style: aboutStyle, isDragging: isAboutDragging } = useDraggable(
  aboutPanel,
  {
    initialValue: { x: 80, y: 80 },
    onStart: () => (top.value = "about"),
  }
);

const { lang } = useLang();
</script>

<template>
  <Stack class="relative grid h-full p-4 md:place-items-center md:p-6">
    <Breadboard />
    <Link class="md:absolute md:top-5 md:left-5" left to="/podcast">
      Back to event
    </Link>
    <div
      ref="videoPanel"
      :style="videoStyle"
      class="fixed z-10 w-fit cursor-grab touch-none select-none overflow-hidden rounded border border-white"
      :class="[
        isVideoDragging ? 'z-40 cursor-grabbing' : '',
        top === 'video' ? 'z-40' : '',
      ]"
    >
      <video ref="video" controls muted autoplay playsinline class="w-[50vw]" />
    </div>
    <div
      :style="aboutStyle"
      class="fixed z-10 w-fit cursor-grab touch-none select-none overflow-hidden rounded border border-white"
      :class="[
        isAboutDragging ? 'z-40 cursor-grabbing' : '',
        top === 'about' ? 'z-40' : '',
      ]"
    >
      <div
        ref="aboutPanel"
        class="cursor-move border-b bg-black/80 px-2 py-1 backdrop-blur-lg"
      >
        <Stack class="h-[30vw] w-[30vw] overflow-y-scroll p-4">
          <Title>
            {{ event.titles[lang] }}
          </Title>
          <EventDatetime :event="event" />
          <Content :content="event.descriptions[lang]" />
        </Stack>
      </div>
    </div>
  </Stack>
</template>
