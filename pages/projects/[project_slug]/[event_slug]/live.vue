<script setup lang="ts">
const route = useRoute();
const slug = route.params.event_slug as string;

const { data: event, error } = await useEventBySlug(slug);
const videostreams = getVideostreams(event.value.streamkey);

const d = useDraggables({
  about: { x: 100, y: 300 },
  video: { x: 200, y: 100 },
  chat: { x: 900, y: 200 },
});

const { lang } = useLang();
</script>

<template>
  <ErrorCard v-if="error" />
  <Stack
    v-else
    class="relative grid p-4 md:h-full md:place-items-center md:p-0"
  >
    <Breadboard class="bg-gray-900" />
    <Link class="md:absolute md:top-6 md:left-6" left :to="event?.eventLink">
      {{ ["Event info", "Ürituse info"][lang] }}
    </Link>

    <Draggable v-bind="d.video" v-if="videostreams.length" class="md:w-[70vw]">
      <Videostream :url="videostreams[0].url" controls />
    </Draggable>

    <Draggable v-bind="d.chat" class="h-[60vw] md:h-[30vw] md:w-[25vw]">
      <Chat :channel="slug" />
    </Draggable>

    <Draggable
      v-bind="d.about"
      class="overflow-y-scroll p-4 pt-10 md:h-[30vw] md:w-[30vw]"
    >
      <Stack>
        <Title>
          {{ event.titles[lang] }}
        </Title>
        <EventDatetime :event="event" />
        <Content :content="event?.descriptions[lang]" />
      </Stack>
    </Draggable>

    <Dock :draggables="d" />
  </Stack>
</template>
