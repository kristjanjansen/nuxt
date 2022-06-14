<script setup lang="ts">
import { format } from "date-fns";
import { scaleTime, scaleLinear, csvParse } from "d3";
import { useMediaControls, useMouseInElement } from "@vueuse/core";
import { formatVideoDatetime } from "~~/composables/video";

const unique = (arr: any[]) => [...new Set(arr)];

function hsl(h = 0, s = 100, l = 50, a = 1): string {
  return `hsl(${h},${s}%,${l}%,${a})`;
}

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
const { currentTime, playing } = useMediaControls(videoplayer, {
  src: video.videoUrl,
});

const width = 1000;
const height = 100;

const xDatetimeScale = scaleTime()
  .domain([new Date(video.startDatetime), new Date(video.endDatetime)])
  .range([0, width]);

const currentX = ref(0);

const formattedCurrentTime = computed(() => {
  return format(new Date(xDatetimeScale.invert(currentX.value)), "HH:mm:ss");
});

const xVideoScale = scaleLinear().domain([0, video.duration]).range([0, width]);

const svg = ref(null);
const { elementX: scrubX } = useMouseInElement(svg);

watch(currentTime, () => {
  currentX.value = xVideoScale(currentTime.value);
});

const scrubbing = ref(false);
const onScrub = () => {
  if (scrubbing.value) {
    currentTime.value = xVideoScale.invert(scrubX.value);
  }
};

const csv = ref("");
const data = ref([]);

watch(csv, () => (data.value = csvParse(csv.value)));

const userIds = computed(() => unique(data.value.map((c) => c.userId)));
const userNames = computed(() => unique(data.value.map((c) => c.userName)));

const dataByUser = computed(() => {
  // return userIds.value.map((userId: string) =>
  //   data.value.filter((d) => d.userId === userId)
  // );
  return userNames.value.map((userName: string) =>
    data.value.filter((d) => d.userName === userName)
  );
});

const paths = computed(() =>
  dataByUser.value.map((d) =>
    polygonpath(
      d.map((d: any) => [
        xDatetimeScale(new Date(d.datetime)),
        height - parseFloat(d.value) * 5,
      ])
    )
  )
);

const zoom = 3;
</script>

<template>
  <Stack class="p-4 md:p-6" v-if="video">
    <Link left to="/lab/videos">Videos</Link>
    <video ref="videoplayer" controls class="aspect-video w-96 rounded" />
    <!-- <div class="grid grid-cols-[auto_1fr] gap-6">
      <Card class="font-mono text-sm text-gray-500">
        <p>startDatetime: {{ formatVideoDatetime(video.startDatetime) }}</p>
        <p>
          endDatetime: &nbsp;&nbsp;{{ formatVideoDatetime(video.endDatetime) }}
        </p>
        <p>uploadDatetme: {{ formatVideoDatetime(video.endDatetime) }}</p>
        <br />
        <p>
          currentTime:
          {{ formatVideoDatetime(xDatetimeScale.invert(currentX)) }}
        </p>
      </Card>
    </div> -->
    <Card class="flex justify-between font-mono text-sm text-gray-500">
      <p>{{ formatVideoDatetime(video.startDatetime) }}</p>
      <p>{{ formatVideoDatetime(xDatetimeScale.invert(currentX)) }}</p>
      <p>{{ formatVideoDatetime(video.endDatetime) }}</p>
    </Card>
    <Card v-if="userIds.length" class="font-mono text-sm">
      UserIds: {{ userIds.join("|") }}
    </Card>
    <Card v-if="userNames.length" class="font-mono text-sm">
      UserNames:
      <span
        v-for="(name, i) in userNames"
        :style="{ color: hsl(217 + i * 50, 91, 60, 0.9) }"
        >{{ name }}&nbsp;</span
      >
    </Card>
    <svg
      class="rounded-lg border-gray-700"
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
        :stroke="hsl(217 + i * 50, 91, 60, 0.5)"
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
          :stroke="hsl(217 + i * 50, 91, 60, 0.5)"
          stroke-width="2"
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
