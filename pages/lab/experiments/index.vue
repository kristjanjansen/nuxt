<script setup lang="ts">
import { useIntervalFn } from "@vueuse/core";
import { formatVideoDatetime } from "~~/composables/video";

const videosUrl = `https://ws.elektron.art/messages?secret=eestiteatriauhinnad&type=VIDEO`;
const { data, refresh, error } = await useAsyncData<any[]>("videos", () =>
  $fetch(videosUrl)
);
const processedVideos = data.value.map(processVideo).reverse().slice(0, 24);
useIntervalFn(refresh, 1000 * 10);
//const processedVideos = [];
</script>

<template>
  <Stack class="p-5 md:p-6">
    <Link to="/lab" left>Lab</Link>
    <Title>Video analysis</Title>
    <NuxtLink
      class="w-full"
      v-for="video in processedVideos"
      :to="'/lab/experiments/' + video.id"
    >
      <Card class="grid grid-cols-[auto_1fr] gap-6">
        <video
          :src="video.videoUrl"
          controls
          class="aspect-video w-72 rounded"
        />
        <div class="font-mono text-sm text-gray-500">
          <p>startDatetime: {{ formatVideoDatetime(video.startDatetime) }}</p>
          <p>
            endDatetime: &nbsp;&nbsp;{{
              formatVideoDatetime(video.endDatetime)
            }}
          </p>
          <p>uploadDatetme: {{ formatVideoDatetime(video.endDatetime) }}</p>
        </div>
      </Card>
    </NuxtLink>
  </Stack>
</template>
