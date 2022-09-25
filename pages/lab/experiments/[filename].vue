<script setup lang="ts">
import {
  useElementSize,
  useMediaControls,
  useMouseInElement,
} from "@vueuse/core";
import { scaleLinear } from "d3";

const route = useRoute();
const { filename } = route.params;
const { getFiles } = useFiles();
const path = "records";
const { data: files } = await getFiles(path);

const file = computed(() => {
  return files.value?.filter((file) => file.filename === filename)[0];
});

const useScrubber = (video, container, svg) => {
  const { width } = useElementSize(container);
  const height = ref(50);

  const { elementX: scrubX } = useMouseInElement(svg);

  const { currentTime } = useMediaControls(video);

  const xVideoScale = computed(() =>
    scaleLinear().domain([0, file.value.duration]).range([0, width.value])
  );

  const currentX = ref(0);

  watch([currentTime, width], () => {
    currentX.value = xVideoScale.value(currentTime.value);
  });

  const scrubbing = ref(false);

  const onScrub = () => {
    currentTime.value = xVideoScale.value.invert(scrubX.value);
  };

  const onMousedown = () => {
    scrubbing.value = true;
    onScrub();
  };
  const onMousemove = () => {
    if (scrubbing.value) {
      currentTime.value = xVideoScale.value.invert(scrubX.value);
    }
  };
  const onMouseup = () => {
    onScrub();
    scrubbing.value = false;
  };
  return { width, height, currentX, onMousedown, onMousemove, onMouseup };
};

const video = ref(null);
const container = ref(null);
const svg = ref(null);

const { width, height, currentX, onMousedown, onMousemove, onMouseup } =
  useScrubber(video, container, svg);
</script>

<template>
  <div>
    <Stack v-if="file" class="p-4 md:p-6">
      <Button small to="/lab/experiments" left>Back</Button>
      <Title>{{ file.streamkey }}</Title>
      <video
        ref="video"
        :src="file.src"
        class="aspect-video w-96"
        playsinline
        controls
      />
      <Code>
        {{
          formatData({
            "Start at": file.start_at_formatted,
            "End at": file.end_at_formatted,
            Duration: file.duration_formatted,
          })
        }}
      </Code>
      <div ref="container" class="w-full">
        <svg
          ref="svg"
          class="rounded border bg-gray-900"
          :width="width"
          :height="height"
          @mousedown="onMousedown"
          @mousemove="onMousemove"
          @mouseup="onMouseup"
        >
          <line
            :x1="currentX"
            y1="0"
            :x2="currentX"
            :y2="height"
            class="stroke-red-500"
          />
        </svg>
      </div>
    </Stack>
  </div>
</template>
