<script setup lang="ts">
import { useDraggable, useFullscreen, useMediaControls } from "@vueuse/core";
import IconMuted from "~icons/radix-icons/speaker-off";
import IconUnmuted from "~icons/radix-icons/speaker-loud";

const route = useRoute();
const slug = route.params.event_slug;

const { data: event } = await useEventBySlug(slug);

//const url = "https://le21.babahhcdn.com/bb1150-le/x_live_1_c1.smil/playlist.m3u8"
const url = "https://sb.err.ee/live/etv.m3u8";

const video = ref();
useVideostream(video, url);

const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(video);

const { muted } = useMediaControls(video);
muted.value = false;

const front = ref("video");

const { lang } = useLang();
</script>

<template>
  <Stack class="relative grid h-full p-4 md:place-items-center md:p-6">
    <Breadboard />
    <Link class="md:absolute md:top-5 md:left-5" left to="/podcast">
      Back to event
    </Link>
    <Draggable
      :x="10"
      :y="10"
      @startDrag="front = 'video'"
      :isFront="front === 'video'"
    >
      <video ref="video" controls autoplay playsinline class="w-[50vw]" />
      <button @click="muted = !muted">
        <IconMuted v-if="muted" />
        <IconUnmuted v-if="!muted" />
      </button>
      <button @click="toggleFullscreen">
        <IconMuted v-if="isFullscreen" />
        <IconUnmuted v-if="!isFullscreen" />
      </button>
    </Draggable>
    <Draggable
      :x="30"
      :y="30"
      @startDrag="front = 'about'"
      :isFront="front === 'about'"
    >
      <Stack class="h-[30vw] w-[30vw] overflow-y-scroll p-4">
        <Title>
          {{ event.titles[lang] }}
        </Title>
        <EventDatetime :event="event" />
        <Content :content="event.descriptions[lang]" />
      </Stack>
    </Draggable>
  </Stack>
</template>
