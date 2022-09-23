<script setup lang="ts">
import { useIntervalFn } from "@vueuse/shared";

const { getFiles } = useFiles();
const { data: files, refresh } = await getFiles("records");
const formatVideo = (file) => {
  return [
    `Stars at   ${file.start_at_formatted} ${
      useFormattedDistance(new Date(file.start_at)).value
    }`,
    `Ends at    ${file.end_at_formatted}`,
    `Duration   ${file.duration_formatted}`,
  ].join("\n");
};
useIntervalFn(refresh, 5000);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <div class="grid grid-cols-3">
      <div />
      <div />
      <Stack>
        <Card v-for="file in files">
          <Stack>
            <video :src="file.src" controls class="w-full4 aspect-video" />
            <div
              class="whitespace-pre-wrap break-all font-mono text-sm text-gray-200"
            >
              {{ formatVideo(file) }}
            </div>
            <Button>Go to video</Button>
          </Stack>
        </Card>
      </Stack>
    </div>
  </Stack>
</template>
