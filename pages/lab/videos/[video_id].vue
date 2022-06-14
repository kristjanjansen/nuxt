<script setup lang="ts">
import { sub, add } from "date-fns";
import { scaleTime, scaleLinear, csvParse } from "d3";
import { useMediaControls, useMouseInElement, useStorage } from "@vueuse/core";

function polygonpath(
  points: [number, number][],
  closed: boolean = false
): string {
  const [startX, startY] = points.shift() || [0, 0];
  const path = [
    "M",
    `${startX || 0},${startY}`,
    ...points.map(([x, y]) => `L ${x},${y}`),
    closed ? "Z" : "",
  ]
    .join(" ")
    .trim();
  return path;
}

function translate(x: number = 0, y: number = 0, unit?: "px" | "%"): string {
  return `translate(${x}${unit ?? ""}, ${y}${unit ?? ""})`;
}

function scale(scaleX: number = 1, scaleY?: number, unit?: "%"): string {
  return `scale(${scaleX}${unit ?? ""}, ${scaleY || scaleX}${unit ?? ""})`;
}

const route = useRoute();
const id = route.params.video_id;

const videosUrl = `https://ws.elektron.art/messages?secret=eestiteatriauhinnad&type=VIDEO`;
const { data: videos } = await useAsyncData<any[]>("videos", () =>
  $fetch(videosUrl)
);

const video = videos.value
  .map(processVideo)
  .filter((video) => video.id === id)[0];

const videoplayer = ref(null);
const { currentTime } = useMediaControls(videoplayer, {
  src: video.videoUrl,
});

const width = 500;
const height = 100;

const xDatetimeScale = scaleTime()
  .domain([
    sub(new Date(video.startDatetime), { seconds: 100 }),
    add(new Date(video.endDatetime), { seconds: 100 }),
  ])
  .range([0, width]);

const currentX = ref(0);

const xVideoScale = scaleLinear().domain([0, video.duration]).range([0, width]);
const xVideoScale2 = scaleLinear()
  .range([0, width])
  .domain([0, video.duration]);

const svg = ref(null);
const { elementX: scrubX } = useMouseInElement(svg);

watch(currentTime, () => {
  currentX.value = xVideoScale(currentTime.value);
});

const onScrub = () => {
  currentTime.value = xVideoScale.invert(scrubX.value);
};

const csv = useStorage(`elektron_video_${id}`, "");
const data = ref([]);

watch(csv, () => (data.value = csvParse(csv.value)));

const path = computed(() =>
  polygonpath(
    data.value.map((d: any) => [
      xDatetimeScale(new Date(d.datetime)),
      height - parseFloat(d.value) * 8,
    ])
  )
);
</script>

<template>
  <Stack class="p-4 md:p-6" v-if="video">
    {{ video.duration }}
    <Link left to="/lab/videos">Videos</Link>
    <div class="font-mono text-gray-500">
      <p>startDatetime: {{ video.startDatetime }}</p>
      <p>endDatetime: &nbsp;&nbsp;{{ video.endDatetime }}</p>
      <p>uploadDatetme: {{ video.endDatetime }}</p>
      <br />
      <p>currentTime: {{ xDatetimeScale.invert(currentX) }}</p>
    </div>
    <video ref="videoplayer" controls class="aspect-video w-1/2 rounded" />

    <input
      type="range"
      v-model="currentX"
      :max="width"
      step="any"
      :style="{ width: width + 'px' }"
      class="accent-gray-600"
    />
    <svg ref="svg" :width="width" :height="height" @mousedown="onScrub">
      <rect
        :width="width"
        :height="height"
        fill="rgb(var(--white))"
        opacity="0.2"
      />
      <line
        :x1="currentX"
        y1="0"
        :x2="currentX"
        :y2="height"
        stroke="rgb(var(--white))"
        opacity="0.1"
        :stroke-width="width"
      />
      <line :x1="currentX" y1="0" :x2="currentX" :y2="height" stroke="red" />
      <path :d="path" stroke="red" opacity="1" fill="none" />
    </svg>

    <svg :width="width" :height="height * 2">
      <line
        :x1="currentX"
        y1="0"
        :x2="currentX"
        :y2="height * 2"
        stroke="red"
      />
      <g
        :transform="[translate(0, height), scale(2, 2)].join('')"
        :transform-origin="[currentX, height].join(' ')"
      >
        <path
          :d="path"
          stroke="red"
          opacity="1"
          fill="none"
          vector-effect="non-scaling-stroke"
        />
      </g>
    </svg>
    <p>Paste a CSV here:</p>
    <textarea
      v-model="csv"
      rows="10"
      class="w-full whitespace-pre border-gray-500 bg-black/0 px-2 py-1 font-mono text-xs text-white focus:border-gray-500 focus:ring-0"
    />
  </Stack>
</template>
