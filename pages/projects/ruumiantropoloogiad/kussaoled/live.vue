<script setup lang="ts">
import IconCapture from "~icons/radix-icons/camera";

//const route = useRoute();
//const slug = route.params.event_slug;
//const { data: event, error } = await useEventBySlug(slug);

const urls = [
  "https://le21.babahhcdn.com/bb1150-le/x_live_1_c1.smil/playlist.m3u8",
  "https://sb.err.ee/live/etv.m3u8",
  "https://sb.err.ee/live/etv2.m3u8",
  "https://sb.err.ee/live/etvpluss.m3u8",
  "https://cloudflare.tv/hls/live.m3u8",
];

const url = urls[0];

const { lang } = useLang();

const d = useDraggables({
  chat: { x: 900, y: 150 },
  video: { x: 100, y: 100 },
  capture: { x: 300, y: 200 },
});

const video = ref<HTMLVideoElement>();
const canvas = ref<HTMLCanvasElement>();
const { width, height } = useVideostream(video, url);
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

    <Breadboard />

    <Draggable v-bind="d.chat">
      <Chat class="h-[60vw] md:h-[30vw] md:w-[25vw]" />
    </Draggable>

    <Draggable v-bind="d.video">
      <div class="md:w-[70vw]">
        <Videostream :url="url">
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
            {{ ["Capture", "Tee pilti"][lang] }}
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

    <Dock :draggables="d" />
  </Stack>
</template>
