<script setup lang="ts">
// Temporary frontpage during Baltoscandal 2022

const { data: project1 } = await useProjectBySlug("ruumiantropoloogiad");
const { data: event1 } = await useEventBySlug("signal_baltoscandal");
const videostreams = getVideostreams(event1.value.streamkey);

const { lang } = useLang();

const d = useDraggables({
  space: { x: 100, y: 100 },
  signal: { x: 700, y: 200 },
});

const url = videostreams[0].url;
const wallpaper =
  "https://elektron.fra1.cdn.digitaloceanspaces.com/assets/wallpaper2.jpg";
const team =
  "https://elektron.fra1.cdn.digitaloceanspaces.com/strapi/2d693fb8c2da1a8d30175a4c45e8e359.jpeg";
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
      <Draggable v-bind="d.signal">
        <img
          class="pointer-events-none absolute inset-0 h-full w-full touch-none object-cover opacity-40"
          :src="team"
        />
        <div class="h-[60vh] overflow-auto p-4 md:h-[30vw] md:w-[35vw]">
          <Stack>
            <Title>{{ event1.titles[lang] }}</Title>
            <Content :content="event1.intros[lang]" />
          </Stack>
          <br />
          <Details :details="parseDetails(event1.detailss[lang])" />
        </div>
      </Draggable>

      <Draggable v-bind="d.space">
        <Stack class="grid overflow-auto p-4 md:w-[50vw] md:grid-cols-2">
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
