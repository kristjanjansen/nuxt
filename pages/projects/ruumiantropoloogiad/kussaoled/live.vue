<script setup lang="ts">
import { differenceInHours } from "date-fns";
import IconCapture from "~icons/radix-icons/camera";
import IconTheme from "~icons/radix-icons/half-2";

const REFRESH_INTERVAL = 1000 * 10;
const path = "anthropologies2";

const slug = "kussaoled";
const { data: event } = await useEventBySlug(slug);
const videostreams = getVideostreams(event.value.streamkey);

const { theme, changeTheme } = useTheme();

const d = useDraggables({
  //chat: { x: 900, y: 150 },
  video: { x: 100, y: 50 },
  capture: { x: 350, y: 150 },
  about: { x: 150, y: 300 },
});

const video = ref<HTMLVideoElement>();
const canvas = ref<HTMLCanvasElement>();
const { width, height } = useVideostream(video, videostreams[0].url);
const { capture: captureFrame, frame } = useVideoframe(
  video,
  canvas,
  width,
  height
);

const { getFiles, uploadFile } = useFiles();
const { data: files, refresh: refreshCaptures } = await getFiles(path);

const capture = async () => {
  captureFrame();
  await uploadFile(path, randomFilename("jpg"), frame.value.src);
  await refreshCaptures();
};

const remaining = ref();

const { data: historicChatMessages, refresh: refreshChat } =
  await useChatHistory(slug);

const messages = computed(
  () =>
    historicChatMessages.value.map((m, i) => {
      const hours = differenceInHours(
        new Date(event.value.start_at),
        new Date(m.datetime)
      );
      return {
        value: m.value,
        x: stringToCoords(m.value, 100, 100)[0],
        y: stringToCoords(m.value, 100, 100)[1],
        hours,
      };
    })
  //.filter((m) => m.hours > 1)
);

useIntervalFn(() => {
  refreshCaptures();
  refreshChat();
}, REFRESH_INTERVAL);
const { lang, changeLang } = useLang();

const wallpapers = [
  "https://elektron.fra1.cdn.digitaloceanspaces.com/assets/wallpaper.jpg",
];

onMounted(() => {
  changeLang();
  changeTheme();
});
</script>

<template>
  <div class="relative p-6 md:place-items-center md:p-0">
    <video
      ref="video"
      muted
      autoplay
      playsinline
      crossorigin="anonymous"
      class="pointer-events-none fixed top-0 left-0 z-[1000] h-0 w-0 touch-none"
    />
    <canvas ref="canvas" class="border-3 hidden opacity-0" />

    <img
      :src="wallpapers[0]"
      class="fixed inset-0 h-full w-full object-cover"
    />

    <!-- <div
      class="fixed inset-0 h-full w-full"
      :class="['bg-black/80', 'bg-black/50'][theme]"
    /> -->

    <ChatOverlay
      :messages="messages.filter((h) => h.hours < 24)"
      class="absolute inset-0 aspect-video h-full"
      :channel="slug"
    />

    <div
      class="z-10 flex items-center justify-between md:absolute md:top-6 md:left-6 md:right-6"
    >
      <Button small left :to="event?.eventLink">
        {{ ["Event info", "Ürituse info"][lang] }}
      </Button>
      <div class="flex items-center space-x-4">
        <Button small @click="changeLang" class="cursor-pointer !text-gray-300">
          {{ ["Eesti keeles", "In english"][lang] }}
        </Button>
        <IconTheme
          @click="changeTheme"
          class="cursor-pointer text-gray-300 transition-colors hover:text-gray-500"
        />
      </div>
    </div>

    <Draggable v-bind="d.video" v-if="videostreams.length">
      <div class="md:w-[70vw]">
        <Videostream :url="videostreams[0].url">
          <RechargingButton @click="capture">
            <IconCapture /> {{ ["Capture", "Pildista"][lang] }}
          </RechargingButton>
        </Videostream>
      </div>
    </Draggable>

    <Draggable v-bind="d.capture">
      <Stack class="h-[80vw] w-full p-4 md:h-[35vw] md:w-[60vw]">
        <div class="flex items-start space-x-4">
          <RechargingButton
            @remaining="(r) => (remaining = r)"
            @click="capture"
            class="shrink-0"
          >
            <IconCapture /> {{ ["Capture", "Pildista"][lang] }}
          </RechargingButton>
          <div class="font-sm text-gray-500">
            {{
              [
                "When you use all your captures, you can capture again in",
                "Kui sul film otsa saab, pead ootama",
              ][lang]
            }}
            {{ remaining }}s
          </div>
        </div>

        <div class="grid w-full grid-cols-2 overflow-y-auto md:grid-cols-3">
          <div v-if="!files.length" class="aspect-video h-48" />
          <MoveTransition>
            <img
              v-for="file in files"
              :key="file.filename"
              :src="file.src"
              class="pointer-events-none aspect-video transform"
            />
          </MoveTransition>
        </div>
      </Stack>
    </Draggable>

    <!-- <Draggable v-bind="d.chat">
      <Chat :channel="slug" class="h-[60vw] md:h-[30vw] md:w-[25vw]" />
    </Draggable> -->

    <Draggable v-bind="d.about">
      <Stack class="overflow-y-scroll p-4 md:h-[25vw] md:w-[35vw]">
        <div>
          <Title v-if="event.authors" small class="text-gray-500">
            {{ event.authors }}
          </Title>
          <Title medium class="transition">
            {{ event.titles[lang] }}
          </Title>
        </div>
        <EventDatetime :event="event" />
        <Content :content="event.intros[lang]" />
        <Content :content="event?.descriptions[lang]" />
        <Details :details="parseDetails(event.detailss[lang])" />
      </Stack>
    </Draggable>

    <div class="block h-8 md:hidden" />
    <Dock :draggables="d" />
  </div>
</template>
