<script setup lang="ts">
import { sub, add } from "date-fns";
import { scaleTime } from "d3";
import { useMediaControls, useMouseInElement } from "@vueuse/core";

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
    sub(new Date(video.startDatetime), { seconds: 10 }),
    add(new Date(video.endDatetime), { seconds: 10 }),
  ])
  .range([0, width]);

const xVideoScale = scaleTime().domain([0, width]).range([0, video.duration]);

const currentX = ref(0);

const svg = ref(null);
const { elementX } = useMouseInElement(svg);

const onClick = () => (currentX.value = elementX.value);

watch(currentX, () => {
  currentTime.value = xVideoScale(currentX.value);
});

const zoom = ref(0);
</script>

<template>
  <Stack class="p-4 md:p-6" v-if="video">
    {{ video.duration }}
    <Link left to="/lab/videos">Videos</Link>
    <div class="font-mono text-gray-500">
      <p>startDatetime: {{ video.startDatetime }}</p>
      <p>endDatetime: &nbsp;&nbsp;{{ video.endDatetime }}</p>
      <p>uploadDatetme: {{ video.endDatetime }}</p>
      <p>currentTime: {{ currentTime }}</p>
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
    <svg ref="svg" :width="width" :height="height" @click="onClick">
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
        :stroke-width="zoom"
      />
      <line :x1="currentX" y1="0" :x2="currentX" :y2="height" stroke="red" />
    </svg>
    <input
      type="range"
      v-model="zoom"
      :max="width"
      step="any"
      class="accent-gray-300"
      opacity="0.5"
    />
    <p>Paste a CSV here:</p>
    <textarea
      rows="10"
      class="w-full whitespace-pre-wrap border-gray-500 bg-black/0 px-2 py-1 font-mono text-white focus:border-gray-500 focus:ring-0"
    />
  </Stack>
</template>
