<script setup lang="ts">
import {
  useDropZone,
  useElementSize,
  useMediaControls,
  useMouseInElement,
} from "@vueuse/core";
import { csvParse, scaleLinear } from "d3";

const route = useRoute();
const { filename } = route.params;
const { getFiles } = useFiles();
const path = "records";
const { data: files } = await getFiles(path);

const file = computed(() => {
  return files.value?.filter((file) => file.filename === filename)[0];
});

const video = ref(null);
const container = ref(null);
const svg = ref(null);

const { width, height, currentX, onMousedown, onMousemove, onMouseup } =
  useVideoScrubber(video, container, svg);

const csv = ref("");

const parsedCsv = computed(() => csvParse(csv.value));

const dropzone = ref(null);

const { isOverDropZone: drop } = useDropZone(dropzone, (files) => {
  const reader = new FileReader();
  reader.readAsText(files[0]);
  reader.onload = () => {
    csv.value = reader.result as string;
  };
});

const messages = computed(() => {
  if (!file) return [];
  return [
    {
      datetime: new Date(file.value.start_at).toISOString(),
      type: "STREAM_PLAYBACK",
      value: 0,
    },
    {
      datetime: new Date(file.value.end_at).toISOString(),
      type: "STREAM_PLAYBACK",
      value: 0,
    },
    ...parsedCsv.value,
  ];
});
</script>

<template>
  <div>
    <Stack v-if="file" class="p-4 md:p-6">
      <Button small to="/lab/experiments" left>Back</Button>
      <Title>{{ file.streamkey }}</Title>
      <div class="grid gap-4 md:grid-cols-[auto_8fr]">
        <video
          ref="video"
          :src="file.src"
          class="aspect-video shrink-0 rounded border border-gray-500 md:h-64"
          playsinline
          controls
        />
        <Textarea
          ref="dropzone"
          placeholder="Paste CSV data or a file here"
          v-model="csv"
          class="break-all text-sm md:h-auto"
          :class="drop ? '!border-green-500 bg-gray-900' : ''"
        />
      </div>
      <Code>
        {{
          formatData({
            Streamkey: file.streamkey,
            "Start at": file.start_at_formatted,
            "End at": file.end_at_formatted,
            Duration: file.duration_formatted,
          })
        }}
      </Code>
      <div ref="container" class="w-full">
        <svg
          ref="svg"
          class="rounded bg-gray-700"
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
      <ControlsData :messages="messages" :wide="true" />
    </Stack>
  </div>
</template>
