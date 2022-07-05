<script setup lang="ts">
import IconCapture from "~icons/radix-icons/camera";
import IconTheme from "~icons/radix-icons/half-2";

definePageMeta({
  layout: "minimal",
});

const slug = "kussaoled";
const { data: event } = await useEventBySlug(slug);
const videostreams = getVideostreams(event.value.streamkey);

const { theme, changeTheme } = useTheme();

const d = useDraggables({
  chat: { x: 900, y: 150 },
  video: { x: 100, y: 100 },
  capture: { x: 300, y: 200 },
  about: { x: 150, y: 400 },
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
const { data: files, refresh } = await getFiles();

const capture = async () => {
  captureFrame();
  await uploadFile(randomFilename("jpg"), frame.value.src);
  await refresh();
};
</script>

<template>
  <Stack class="relative grid p-6 md:place-items-center md:p-0">
    <canvas ref="canvas" class="border-3 hidden opacity-0" />

    <Breadboard class="bg-gray-900" />
    <div
      class="z-10 flex items-center justify-between md:absolute md:top-6 md:left-6 md:right-6"
    >
      <Link
        left
        to="https://elektron.art/projects/ruumiantropoloogiad/kussaoled"
      >
        Ruumiantropoloogiad
      </Link>
      <IconTheme
        @click="changeTheme"
        class="scale-75 cursor-pointer text-gray-300 transition-colors hover:text-gray-500"
      />
    </div>

    <Draggable v-bind="d.video" v-if="videostreams.length">
      <div class="md:w-[70vw]">
        <Videostream :url="videostreams[0].url">
          <button
            @click.stop="capture"
            class="rounded-full p-3 transition-all hover:bg-neutral-100/20"
          >
            <IconCapture class="text-neutral-100" />
          </button>
        </Videostream>
        <video
          ref="video"
          muted
          autoplay
          playsinline
          crossorigin="anonymous"
          class="pointer-events-none fixed top-0 left-0 -z-50 touch-none opacity-0"
        />
      </div>
    </Draggable>

    <Draggable v-bind="d.capture">
      <Stack class="h-[80vw] w-full p-4 md:h-[35vw] md:w-[60vw]">
        <div>
          <Button primary @click.stop="capture" class="!flex gap-2">
            <IconCapture />
            Capture / Pildista
          </Button>
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

    <Draggable v-bind="d.chat">
      <Chat :channel="slug" class="h-[60vw] md:h-[30vw] md:w-[25vw]" />
    </Draggable>

    <Draggable v-bind="d.about">
      <Stack class="overflow-y-scroll p-4 md:h-[25vw] md:w-[35vw]">
        <Title class="flex">
          {{ event.titles.join(" / ").replace(/<\/?p>/gm, "") }}
        </Title>
        <EventDatetime :event="event" />
        <Details :details="parseDetails(event.detailss[0])" />
        <Content :content="event?.descriptions[0]" />
      </Stack>
    </Draggable>

    <div class="block h-8 md:hidden" />
    <Dock :draggables="d" />
  </Stack>
</template>
