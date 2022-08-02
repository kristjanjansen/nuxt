<script setup lang="ts">
import { useIntervalFn } from "@vueuse/core";
import { format, sub } from "date-fns";
import { formatVideoDatetime } from "~~/composables/video";

const videosUrl = `https://ws.elektron.art/messages?secret=eestiteatriauhinnad&type=VIDEO`;
const { data, refresh, error } = await useAsyncData<any[]>("videos", () =>
  $fetch(videosUrl)
);
const processedVideos = (data.value || []).map(processVideo).reverse();
useIntervalFn(refresh, 1000 * 10);
//const processedVideos = [];

const formatLink = (video) => {
  const date = format(
    sub(new Date(video.startDatetime), { hours: 3 }),
    "yy_MM_dd__HH_mm_ss"
  );
  const path = [video.key, date, video.duration].join("___");
  return `${path}.mp4`;
};

watchEffect(() =>
  console.log(
    JSON.stringify(
      processedVideos.map((v) => {
        return { ...v, filename: formatLink(v) };
      })
    )
  )
);
</script>

<template>
  <ErrorCard v-if="error" />
  <Stack v-else class="p-5 md:p-6">
    <Link to="/lab" left>Lab</Link>
    <Title>Video analysis</Title>
    <div
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
          <p>{{ video.name }}</p>
          <br />
          Download
          <a
            class="text-white"
            :href="video.videoUrl"
            :download="formatLink(video)"
          >
            {{ formatLink(video) }}
          </a>
        </div>
      </Card>
    </div>
  </Stack>
</template>
