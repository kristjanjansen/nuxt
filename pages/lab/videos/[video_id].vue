<script setup lang="ts">
import { sub, add } from "date-fns";
import { scaleTime } from "d3";

const route = useRoute();
const id = route.params.video_id;

const videosUrl = `https://ws.elektron.art/messages?secret=eestiteatriauhinnad&type=VIDEO`;
const { data: videos } = await useAsyncData<any[]>("videos", () =>
  $fetch(videosUrl)
);

const video = videos.value
  .map(processVideo)
  .filter((video) => video.id === id)[0];

const width = 500;
const height = 100;

const xScale = scaleTime()
  .domain([
    sub(new Date(video.startDatetime), { seconds: 10 }),
    add(new Date(video.endDatetime), { seconds: 10 }),
  ])
  .range([0, width]);

const currentX = ref(0);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Link left to="/lab/videos">Videos</Link>
    <video :src="video.videoUrl" controls class="aspect-video w-1/2 rounded" />
    <div class="font-mono text-gray-500">
      <p>startDatetime: {{ video.startDatetime }}</p>
      <p>endDatetime: &nbsp;&nbsp;{{ video.endDatetime }}</p>
      <p>uploadDatetme: {{ video.endDatetime }}</p>
    </div>
    <input
      type="range"
      v-model="currentX"
      :max="width"
      step="any"
      :style="{ width: width + 'px' }"
    />
    <svg :width="width" :height="height">
      <rect :width="width" :height="height" fill="rgba(255,255,255,0.1)" />
      <line :x1="currentX" y1="0" :x2="currentX" :y2="height" stroke="red" />
    </svg>
  </Stack>
</template>
