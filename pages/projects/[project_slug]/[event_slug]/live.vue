<script setup lang="ts">
import { useDraggable } from "@vueuse/core";
const route = useRoute();
const slug = route.params.event_slug;

const { data: event } = await useEventBySlug(slug);

//const url = "https://le21.babahhcdn.com/bb1150-le/x_live_1_c1.smil/playlist.m3u8"
const url = "https://sb.err.ee/live/etv.m3u8";

const video = ref();
const { width, height } = useVideostream(video, url);

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
      <video ref="video" controls muted autoplay playsinline class="w-[50vw]" />
    </Draggable>
    <Draggable
      :x="30"
      :y="30"
      @startDrag="front = 'about'"
      :isFront="front === 'about'"
      class="bg-black/80 backdrop-blur-lg"
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
