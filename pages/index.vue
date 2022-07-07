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
  project1: { x: 50, y: 100, titles: project1.value.titles },
  event1: { x: 700, y: 400, titles: event1.value.titles },
});

const url = videostreams[0].url;
//const url = "https://sb.err.ee/live/vikerraadio.m3u8";

const wallpaper =
  "https://elektron.fra1.cdn.digitaloceanspaces.com/assets/wallpaper2.jpg";
const { theme } = useTheme();
</script>

<template>
  <Stack class="p-4">
    <img :src="wallpaper" class="fixed inset-0 h-full w-full object-cover" />
    <div
      class="fixed inset-0 h-full w-full backdrop-blur md:backdrop-blur-none"
      :class="['bg-black/60', 'bg-black/80'][theme]"
    />
    <Stack class="absolute top-4 left-4 right-4 gap-4 md:top-6 md:left-6">
      <Draggable v-bind="d.event1">
        <img
          class="pointer-events-none absolute inset-0 h-full w-full touch-none object-cover opacity-40"
          src="https://www.baltoscandal.ee/sites/default/files/inline/images/elektronfamily_alissasnaider_2022-149_1000.jpg"
        />
        <div class="h-[60vh] overflow-auto p-4 md:h-[20vw] md:w-[40vw]">
          <Stack>
            <Title>{{ event1.titles[lang] }}</Title>
            <Content :content="event1.intros[lang]" />
          </Stack>
          <Audiostream class="absolute right-0 bottom-6 left-0" :url="url" />
        </div>
      </Draggable>

      <Draggable v-bind="d.project1">
        <Stack class="grid overflow-auto p-4 md:w-[70vw] md:grid-cols-2">
          <Stack>
            <Title>{{ project1.titles[lang] }}</Title>
            <Content :content="project1.intros[lang]" class="text-gray-500" />
          </Stack>
          <EventCard
            v-for="event in project1.events"
            :event="event"
            class="transition hover:brightness-125"
          />
        </Stack>
      </Draggable>
    </Stack>
    <Dock :draggables="d" />
  </Stack>
</template>
