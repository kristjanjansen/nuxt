<script setup lang="ts">
import { useIntervalFn } from "@vueuse/core";
import { formatVideoDatetime } from "~~/composables/video";

const videosUrl = `https://ws.elektron.art/messages?secret=eestiteatriauhinnad`;
const { data, refresh, error } = await useAsyncData<any[]>("videos", () =>
  $fetch(videosUrl)
);
// console.log(data.value);
// const processedVideos = data.value.map(processVideo).reverse().slice(0, 24);
// useIntervalFn(refresh, 1000 * 10);
</script>

<template>
  <pre>{{ data.map((d) => d.type).length }}</pre>
  <!--Stack class="p-5 md:p-6">
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
  </Stack-->
</template>
