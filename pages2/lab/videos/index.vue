<script setup lang="ts">
import { useIntervalFn } from "@vueuse/core";

const videosUrl = `https://ws.elektron.art/messages?secret=eestiteatriauhinnad&type=VIDEO`;
const { data, refresh } = await useAsyncData<any[]>("videos", () =>
  $fetch(videosUrl)
);
const processedVideos = data.value.map(processVideo).reverse().slice(0, 24);
useIntervalFn(refresh, 1000 * 10);
</script>

<template>
  <Stack class="p-5 md:p-6">
    <Title>Videos</Title>
    <NuxtLink
      class="w-full"
      v-for="video in processedVideos"
      :to="'/lab/videos/' + video.id"
    >
      <Card class="grid grid-cols-[auto_1fr] gap-6">
        <video
          :src="video.videoUrl"
          controls
          class="aspect-video w-72 rounded"
        />
        <div class="font-mono">
          <p>startDatetime: {{ formatVideoDatetime(video.startDatetime) }}</p>
          <p>endDatetime: &nbsp;&nbsp;{{ video.endDatetime }}</p>
          <p>uploadDatetme: {{ video.endDatetime }}</p>
        </div>
      </Card>
    </NuxtLink>
  </Stack>
</template>
