<script setup lang="ts">
const slug = "seemsnormal";

const wallpaper =
  "https://elektron.fra1.cdn.digitaloceanspaces.com/assets/zahir_seems_normal_wallpaper.jpg";

const baseUrl = "https://elektron.fra1.cdn.digitaloceanspaces.com/assets/";

const tracks = [
  "ZAHIR_1__Post_Boner.mp3",
  "ZAHIR_2__Bad Tattoo_Depression_Blues.mp3",
  "ZAHIR_3__Roxanne.mp3",
  "ZAHIR_4__Kodak_Moment.mp3",
  "ZAHIR_5__Uniform.mp3",
  "ZAHIR_6__Return_Of_The_Hypochondriac_Man.mp3",
  "ZAHIR_7__The_Making_Of_Psycho.mp3",
  "ZAHIR_8__F.mp3",
  "ZAHIR_9__First_Snow.mp3",
].map((filename) => {
  const name = filename.split("__")[1].split(".")[0].replace(/_/g, " ");
  return { name, url: baseUrl + filename };
});

const d = useDraggables({
  side1: { x: 50, y: 100 },
  side2: { x: 450, y: 100 },
  chat: { x: 950, y: 300 },
});
const offsets = [
  [0, 4],
  [5, 9],
];

const error = false;

const { theme } = useTheme();
const { lang } = useLang();
</script>

<template>
  <ErrorCard v-if="error" />
  <Stack
    v-else
    class="relative grid p-4 md:h-full md:place-items-center md:p-0"
  >
    <img :src="wallpaper" class="fixed inset-0 h-full w-full object-cover" />

    <Breadboard />

    <Button small left class="md:absolute md:top-6 md:left-6" to="/" />

    <Draggable v-bind="d.side1" class="p-4 md:w-[25vw]">
      <Title medium>Side 1</Title>
      <div v-for="(track, i) in tracks.slice(0, 4)" class="mt-4">
        <Title small>{{ i + 1 }}. {{ track.name }}</Title>
        <audio
          :src="track.url"
          controls
          :class="['invert', ''][theme]"
          class="w-full"
          controlsList="nodownload"
        />
      </div>
    </Draggable>

    <Draggable v-bind="d.side2" class="p-4 md:w-[25vw]">
      <Title medium>Side 2</Title>
      <div v-for="(track, i) in tracks.slice(4, 9)" class="mt-4">
        <Title small>{{ i + 1 }}. {{ track.name }}</Title>
        <audio
          :src="track.url"
          controls
          :class="['invert', ''][theme]"
          class="w-full"
          controlsList="nodownload"
        />
      </div>
    </Draggable>

    <Draggable v-bind="d.chat">
      <Chat :channel="slug" class="h-[60vw] md:h-[30vw] md:w-[25vw]" />
    </Draggable>

    <!-- <Draggable v-bind="d.about">
      <Stack class="overflow-y-scroll p-4 md:h-[30vw] md:w-[30vw]">
        <Title>
          {{ event.titles[lang] }}
        </Title>
        <EventDatetime :event="event" />
        <Content :content="event?.descriptions[lang]" />
      </Stack>
    </Draggable> -->

    <Dock :draggables="d" />
  </Stack>
</template>
