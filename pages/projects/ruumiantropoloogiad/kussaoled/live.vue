<script setup lang="ts">
import IconCapture from "~icons/radix-icons/camera";

const route = useRoute();
const slug = route.params.event_slug;

const { data: event, error } = await useEventBySlug(slug);

//const url = "https://le21.babahhcdn.com/bb1150-le/x_live_1_c1.smil/playlist.m3u8"
const url = "https://sb.err.ee/live/etv.m3u8";

const { lang } = useLang();

const d = useDraggables({
  video: { x: 200, y: 100 },
  capture: { x: 300, y: 500 },
  chat: { x: 900, y: 200 },
});

const video = ref<HTMLVideoElement>();
const canvas = ref<HTMLCanvasElement>();
const { width, height } = useVideostream(video, url);
const { capture, frames, reversedFrames } = useVideocapture(
  video,
  canvas,
  width,
  height
);
</script>

<template>
  <ErrorCard v-if="error" />
  <Stack
    v-else
    class="relative grid p-4 md:h-full md:place-items-center md:p-6"
  >
    <canvas ref="canvas" class="hidden" />
    <Breadboard class="hidden md:block" />
    <Link class="md:absolute md:top-6 md:left-6" left :to="event?.eventLink">
      Back to event
    </Link>

    <Draggable v-bind="d.video">
      <div class="md:w-[70vw]">
        <Videostream :url="url" />
        <video
          ref="video"
          muted
          autoplay
          playsinline
          class="pointer-events-none fixed top-0 left-0 -z-50 touch-none opacity-100"
        />
      </div>
      <canvas ref="canvas" class="hidden" />
    </Draggable>

    <Draggable v-bind="d.capture">
      <Stack class="h-[20vw] w-[60vw] p-4">
        <div>
          <Button @click.stop="capture" class="!flex gap-2">
            <IconCapture />
            {{ ["Capture", "Tee pilti"][lang] }}
          </Button>
        </div>
        <div class="grid grid-cols-3 overflow-y-auto">
          <div v-if="!reversedFrames.length" class="aspect-video h-48" />
          <FadeGroup>
            <img
              :key="f.slice(-300)"
              v-for="f in reversedFrames"
              :src="f"
              class="aspect-video"
            />
          </FadeGroup>
        </div>
      </Stack>
    </Draggable>

    <Draggable v-bind="d.chat">
      <Chat class="h-[60vw] md:h-[30vw] md:w-[25vw]" />
    </Draggable>

    <Dock :draggables="d" />
  </Stack>
</template>
