<script setup lang="ts">
import { useMediaControls, useMouseInElement } from "@vueuse/core";

const route = useRoute();
const id = route.params.video_id;

const videosUrl = `https://ws.elektron.art/messages?secret=eestiteatriauhinnad&type=VIDEO`;

const { data: videos } = await useAsyncData("videos", () => $fetch(videosUrl));
//@ts-ignore
const video = videos.value
  .map(processVideo)
  .filter((video) => video.id === id)[0];

const videoplayer = ref<HTMLVideoElement | null>(null);
const { currentTime } = useMediaControls(video, {
  src: video.videoUrl,
});
const svg = ref(null);
const { elementX } = useMouseInElement(svg);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Link left to="/lab/videos">Videos</Link>
    <video ref="videoplayer" controls class="aspect-video w-1/2 rounded" />
    <div class="font-mono">
      <p>startDatetime: {{ video.startDatetime }}</p>
      <p>endDatetime: &nbsp;&nbsp;{{ video.endDatetime }}</p>
      <p>uploadDatetme: {{ video.endDatetime }}</p>
    </div>
  </Stack>
</template>
