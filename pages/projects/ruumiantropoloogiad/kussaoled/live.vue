<script setup lang="ts">
import IconCapture from "~icons/radix-icons/camera";

const route = useRoute();
const slug = route.params.event_slug;

//const { data: event, error } = await useEventBySlug(slug);

const urls = [
  "https://le21.babahhcdn.com/bb1150-le/x_live_1_c1.smil/playlist.m3u8",
  "https://sb.err.ee/live/etv.m3u8",
  "https://sb.err.ee/live/etv2.m3u8",
  "https://sb.err.ee/live/etvpluss.m3u8",
  "https://cloudflare.tv/hls/live.m3u8",
];

const url = urls[3];

const { lang } = useLang();

const d = useDraggables({
  video: { x: 200, y: 100 },
  capture: { x: 300, y: 500 },
  chat: { x: 900, y: 200 },
});

const video = ref<HTMLVideoElement>();
const canvas = ref<HTMLCanvasElement>();
const { width, height } = useVideostream(video, url);
const { capture, frames } = useVideocapture(video, canvas, width, height);
const sortFrames = (frame1, frame2) => frame2.timestamp - frame1.timestamp;
</script>

<template>
  <Stack class="relative grid p-4 md:h-full md:place-items-center md:p-6">
    <canvas ref="canvas" class="hidden" />
    <Breadboard class="hidden md:block" />
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
          class="pointer-events-none fixed top-0 left-0 -z-50 touch-none opacity-100"
        />
      </div>
    </Draggable>

    <Draggable v-bind="d.capture">
      <Stack class="h-[70vw] w-full p-4 md:h-[20vw] md:w-[60vw]">
        <div>
          <Button @click.stop="capture" class="!flex gap-2">
            <IconCapture />
            {{ ["Capture", "Tee pilti"][lang] }}
          </Button>
        </div>
        <div class="grid w-full grid-cols-2 overflow-y-auto md:grid-cols-3">
          <div v-if="!frames.length" class="aspect-video h-48" />
          <CaptureTransition>
            <img
              v-for="frame in frames.sort(sortFrames)"
              :key="frame.timestamp"
              :src="frame.src"
              class="aspect-video"
            />
          </CaptureTransition>
        </div>
      </Stack>
    </Draggable>

    <Draggable v-bind="d.chat">
      <Chat class="h-[60vw] md:h-[30vw] md:w-[25vw]" />
    </Draggable>

    <Dock :draggables="d" />
  </Stack>
</template>
