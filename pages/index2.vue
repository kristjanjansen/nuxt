<script setup lang="ts">
const { data: project1, error: project1Error } = await useProjectBySlug(
  "ruumiantropoloogiad"
);
const { data: event1, error: event1Error } = await useEventBySlug(
  "signal_baltoscandal"
);
const videostreams = getVideostreams(event1.value.streamkey);

const { lang } = useLang();

const d = useDraggables({
  project1: { x: 50, y: 100 },
  event1: { x: 600, y: 300 },
});

//const url = videostreams[0].url
const url = "https://sb.err.ee/live/vikerraadio.m3u8";
</script>

<template>
  <Stack class="p-4">
    <Breadboard class="bg-white/10" />
    <Stack class="absolute top-4 left-4 right-4 gap-4 md:top-6 md:left-6">
      <Draggable v-bind="d.project1">
        <Stack class="grid h-[30vw] w-[70vw] grid-cols-2 overflow-auto p-4">
          <Stack>
            <Title>{{ project1.titles[lang] }}</Title>
            <Content :content="project1.intros[lang]" />
          </Stack>
          <EventCard v-for="event in project1.events" :event="event" />
        </Stack>
      </Draggable>
      <Draggable v-bind="d.event1">
        <img
          class="pointer-events-none absolute inset-0 h-full w-full touch-none object-cover opacity-40"
          src="https://www.baltoscandal.ee/sites/default/files/inline/images/elektronfamily_alissasnaider_2022-149_1000.jpg"
        />
        <div class="h-[20vw] w-[40vw] overflow-auto p-4">
          <Stack>
            <Title>{{ event1.titles[lang] }}</Title>
            <Content :content="event1.intros[lang]" />
          </Stack>
          <Audiostream class="absolute right-0 bottom-6 left-0" :url="url" />
        </div>
      </Draggable>
    </Stack>
    <Dock :draggables="d" />
  </Stack>
</template>
