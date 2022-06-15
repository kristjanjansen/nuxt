<script setup lang="ts">
const route = useRoute();
const slug = route.params.event_slug;

const { data: event, error } = await useEventBySlug(slug);

//const url = "https://le21.babahhcdn.com/bb1150-le/x_live_1_c1.smil/playlist.m3u8"
const url = "https://sb.err.ee/live/etv.m3u8";

const front = ref("video");

const { lang } = useLang();
</script>

<template>
  <ErrorCard v-if="error" />
  <Stack
    v-else
    class="relative grid p-4 md:h-full md:place-items-center md:p-6"
  >
    <Breadboard class="hidden md:block" />
    <Link class="md:absolute md:top-6 md:left-6" left :to="event.eventLink">
      Back to event
    </Link>

    <Draggable
      :x="200"
      :y="100"
      @startDrag="front = 'chat'"
      :isFront="front === 'chat'"
    >
      <Videostream :url="url" class="md:w-[70vw]" />
    </Draggable>

    <Draggable
      :x="900"
      :y="200"
      @startDrag="front = 'video'"
      :isFront="front === 'video'"
    >
      <Chat class="h-[60vw] md:h-[30vw] md:w-[25vw]" />
    </Draggable>

    <Draggable
      :x="100"
      :y="300"
      @startDrag="front = 'about'"
      :isFront="front === 'about'"
    >
      <Stack class="overflow-y-scroll p-4 md:h-[30vw] md:w-[30vw]">
        <Title>
          {{ event.titles[lang] }}
        </Title>
        <EventDatetime :event="event" />
        <Content :content="event.descriptions[lang]" />
      </Stack>
    </Draggable>
  </Stack>
</template>
