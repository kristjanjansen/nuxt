<script setup lang="ts">
import { differenceInSeconds, format, parse, sub } from "date-fns";
import { scaleTime, scaleLinear, csvParse } from "d3";
import {
  useElementSize,
  useMediaControls,
  useMouseInElement,
} from "@vueuse/core";
import { formatVideoDatetime } from "~~/composables/video";
import { hsl, translate, scale } from "~~/composables/svg";

type Props = {
  video: any;
  csv?: string;
};

const { video, csv = "" } = defineProps<Props>();

const videoplayer = ref(null);
const { currentTime } = useMediaControls(videoplayer, {
  src: video.videoUrl,
});

const graph = ref(null);
const { width } = useElementSize(graph);
const svg = ref(null);
const { elementX: scrubX } = useMouseInElement(svg);

//const width = 300;
const height = 100;

const xDatetimeScale = computed(() =>
  scaleTime()
    .domain([new Date(video.startDatetime), new Date(video.endDatetime)])
    .range([0, width.value])
);

const currentX = ref(0);

const formattedCurrentTime = computed(() => {
  return format(
    new Date(xDatetimeScale.value.invert(currentX.value)),
    "HH:mm:ss"
  );
});

const xVideoScale = computed(() =>
  scaleLinear().domain([0, video.duration]).range([0, width.value])
);

watch([currentTime, width], () => {
  currentX.value = xVideoScale.value(currentTime.value);
});

const scrubbing = ref(false);
const onScrub = () => {
  if (scrubbing.value) {
    currentTime.value = xVideoScale.value.invert(scrubX.value);
  }
};

const csvField = ref(csv);
const data = computed(() => csvParse(csvField.value));
const userNames = computed(() => unique(data.value.map((c) => c.userName)));
const dataByUser = computed(() => {
  return userNames.value.map((userName: string) =>
    data.value.filter((d) => d.userName === userName)
  );
});

const paths = computed(() =>
  dataByUser.value.map((d) =>
    polygonpath(
      d.map((d: any) => [
        xDatetimeScale.value(new Date(d.datetime)),
        height - parseFloat(d.value) * 5,
      ])
    )
  )
);

const zoom = 3;

const hslStep = 25;

const userIndex = ref(-1);

const opacity = (index) => {
  if (userIndex.value > -1) {
    if (userIndex.value === index) {
      return 1;
    } else {
      return 0.3;
    }
  }
  return 0.6;
};
</script>

<template>
  <Stack class="w-full">
    <video
      ref="videoplayer"
      controls
      class="aspect-video rounded md:w-[25vw]"
    />
    <Card class="justify-between font-mono text-sm text-gray-500 md:flex">
      <p>{{ formatVideoDatetime(video.startDatetime) }}</p>
      <p>{{ formatVideoDatetime(xDatetimeScale.invert(currentX)) }}</p>
      <p>{{ formatVideoDatetime(video.endDatetime) }}</p>
    </Card>
    <Card
      v-if="userNames.length"
      class="grid grid-cols-2 overflow-auto font-mono text-sm md:grid-cols-4"
    >
      <div @click="userIndex = -1" class="cursor-pointer">All users</div>
      <div
        v-for="(name, i) in userNames"
        :style="{ color: hsl(217 + i * hslStep, 91, 60, opacity(i) + 0.2) }"
        @click="userIndex = i"
        class="cursor-pointer"
      >
        {{ name }}&nbsp;&nbsp;
      </div>
    </Card>
    <div ref="graph" class="w-full">
      <svg
        class="rounded-lg"
        ref="svg"
        :width="width"
        :height="height"
        @mousedown="scrubbing = true"
        @mousemove="onScrub"
        @mouseup="
          () => {
            onScrub();
            scrubbing = false;
          }
        "
      >
        <rect
          :width="width"
          :height="height"
          fill="rgb(var(--white))"
          opacity="0.1"
        />
        <line
          :x1="currentX"
          :y1="0"
          :x2="currentX"
          :y2="height"
          stroke="rgb(var(--white))"
          opacity="0.03"
          :stroke-width="width / zoom"
        />
        <line
          :x1="currentX"
          y1="0"
          :x2="currentX"
          :y2="height"
          class="stroke-red-500"
        />
        <path
          v-for="(path, i) in paths"
          :d="path"
          fill="none"
          :stroke="hsl(217 + i * hslStep, 91, 60, opacity(i))"
          stroke-width="2"
        />
      </svg>

      <svg :width="width" :height="height * zoom">
        <line
          :x1="currentX"
          y1="0"
          :x2="currentX"
          :y2="height * zoom"
          class="stroke-red-500"
        />
        <text :x="currentX + 10" y="20" class="fill-white font-mono text-xs">
          {{ formattedCurrentTime }}
        </text>
        <g
          :transform="
            [translate(0, height * (zoom / 2)), scale(zoom, zoom)].join('')
          "
          :transform-origin="[currentX, height].join(' ')"
        >
          <path
            v-for="(path, i) in paths"
            :d="path"
            fill="none"
            vector-effect="non-scaling-stroke"
            :stroke="hsl(217 + i * hslStep, 91, 60, opacity(i))"
            stroke-width="2"
            @click="userIndex = i"
          />
          <path
            v-for="(path, i) in paths"
            :d="path"
            fill="none"
            stroke="rgba(0,0,0,0)"
            stroke-width="10"
            @click="userIndex = i"
          />
        </g>
      </svg>
    </div>
    <textarea
      placeholder="Paste a CSV here"
      v-model="csvField"
      rows="10"
      class="w-full whitespace-pre border-gray-500 bg-black/0 px-2 py-1 font-mono text-xs text-white focus:border-gray-500 focus:ring-0"
    />
  </Stack>
</template>
