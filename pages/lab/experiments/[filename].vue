<script setup lang="ts">
import { useElementSize, useMediaControls } from "@vueuse/core";
import { scaleLinear } from "d3";

const route = useRoute();
const { filename } = route.params;
const { getFiles } = useFiles();
const path = "records";
const { data: files } = await getFiles(path);

const file = computed(() => {
  return files.value?.filter((file) => file.filename === filename)[0];
});
const graph = ref(null);
const { width } = useElementSize(graph);
const height = ref(50);

const videoplayer = ref(null);
const { currentTime } = useMediaControls(videoplayer);

const xVideoScale = computed(() =>
  scaleLinear().domain([0, file.value.duration]).range([0, width.value])
);

const currentX = ref(0);

watch([currentTime, width], () => {
  currentX.value = xVideoScale.value(currentTime.value);
});

const scrubbing = ref(false);

const onMousedown = () => {
  scrubbing.value = true;
};
const onMousemove = () => {};
const onMouseup = () => {};
</script>

<template>
  <div>
    <Stack v-if="file" class="p-4 md:p-6">
      <Button small to="/lab/experiments" left>Back</Button>
      <Title>{{ file.streamkey }}</Title>
      <video
        ref="videoplayer"
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
      <div ref="graph" class="w-full">
        <svg
          class="rounded border bg-gray-900"
          ref="svg"
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
