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
  <Stack v-if="files" class="p-4 md:p-6">
    <div class="grid grid-cols-3">
      <div />
      <div />
      <Stack>
        <Card v-for="file in files.slice(0, 5)">
          <Stack>
            <video :src="file.src" controls class="aspect-video" />
            <div
              class="whitespace-pre-wrap break-all font-mono text-sm text-gray-200"
            >
              {{ formatVideo(file) }}
            </div>
            <Button :to="'/lab/experiments/' + file.filename">
              Go to video
            </Button>
          </Stack>
        </Card>
      </Stack>
    </div>
  </Stack>
</template>
