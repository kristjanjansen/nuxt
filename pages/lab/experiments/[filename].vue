<script setup lang="ts">
import { useDropZone, useMediaControls } from "@vueuse/core";
import { csvParse, scaleTime } from "d3";
import { isWithinInterval } from "date-fns";

const route = useRoute();
const { filename } = route.params;
const { getFiles } = useFiles();
const path = "records";
const { data: files } = await getFiles(path);

const file = computed(() => {
  return files.value?.filter((file) => file.filename === filename)[0];
});

const video = ref(null);

const { currentTime, duration, seeking } = useMediaControls(video);

const xVideoScale = computed(() =>
  scaleTime()
    .domain([new Date(file.value?.start_at), new Date(file.value?.end_at)])
    .range([0, duration.value])
);

const currentXTime = ref(null);
provide("currentXTime", currentXTime);

watch(currentXTime, () => {
  if (videoInRange.value && !seeking.value) {
    currentTime.value = xVideoScale.value(currentXTime.value);
  }
});

watch(currentTime, () => {
  currentXTime.value = xVideoScale.value.invert(currentTime.value);
});

const videoInRange = computed(
  () =>
    currentXTime.value === null ||
    isWithinInterval(new Date(currentXTime.value), {
      start: new Date(file.value.start_at),
      end: new Date(file.value.end_at),
    })
);

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
  const type = "STREAM_" + file.value.streamkey;
  return [
    {
      type,
      value: 0,
      datetime: new Date(file.value.start_at).toISOString(),
    },
    {
      type,
      value: 0,
      datetime: new Date(file.value.end_at).toISOString(),
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
        <div
          class="relative shrink-0 overflow-hidden rounded border border-gray-500"
        >
          <video
            ref="video"
            :src="file.src"
            class="aspect-video md:h-64"
            playsinline
            controls
          />
          <FadeTransition>
            <div
              v-if="!videoInRange"
              class="pointer-events-none absolute inset-0 grid place-content-center rounded bg-black/90 tracking-wide text-gray-500"
            >
              Video out of range
            </div>
          </FadeTransition>
        </div>
        <Textarea
          ref="dropzone"
          placeholder="Paste CSV data or a file here"
          v-model="csv"
          class="aspect-video break-all text-sm md:aspect-auto md:h-auto"
          :class="drop ? '!border-green-500 bg-gray-900' : ''"
        />
      </div>

      <ControlsData :messages="messages" :wide="true" />
    </Stack>
  </div>
</template>
