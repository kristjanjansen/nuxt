<script setup lang="ts">
const route = useRoute();
//const slug = route.params.event_slug as string;

//const { data: event, error } = await useEventBySlug(slug);
const videostreams = getVideostreams("xxx");
const url = videostreams[0].url;
const video1 = ref<HTMLVideoElement | null>(null);
useVideostream(video1, url);
</script>

<template>
  <Stack class="grid grid-cols-2 p-4 md:p-6">
    <video
      ref="video1"
      class="aspect-video w-full"
      autoplay
      playsinline
      crossorigin="anonymous"
      loop
      muted
      controls
    />
    <Videostream :url="url" />
  </Stack>
</template>
