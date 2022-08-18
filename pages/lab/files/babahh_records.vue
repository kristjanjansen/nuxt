<script setup lang="ts">
import { format, sub } from "date-fns";
import { useIntervalFn } from "@vueuse/core";
import { formatVideoDatetime } from "~~/composables/video";
const videosUrl = `https://ws.elektron.art/messages?secret=eestiteatriauhinnad&type=VIDEO`;
const { data, refresh, error } = await useAsyncData<any[]>("videos", () =>
  $fetch(videosUrl)
);
const processedVideos = (data.value || [])
  .map(processVideo)
  .reverse()
  .slice(0, 24);
useIntervalFn(refresh, 1000 * 10);
//const processedVideos = [];
</script>

<template>
  <ErrorCard v-if="error" />
  <Stack v-else class="p-5 md:p-6">
    <Link to="/lab/files" left>Files</Link>
    <Title>/babahh_records</Title>
    <div class="w-full" v-for="video in processedVideos">
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
          <br />
          <p>
            {{
              video.key +
              "___" +
              format(
                sub(video.startDatetime, { hours: 3 }),
                "yy_MM_dd__HH_mm_ss"
              ) +
              "___" +
              video.duration
            }}
          </p>
          <br />
          <a :href="video.videoUrl" target="_blank">Download</a>
        </div>
      </Card>
    </div>
  </Stack>
</template>
