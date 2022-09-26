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
  <div v-if="!files" />
  <Stack v-else class="p-4 md:p-6">
    <Button small left to="/lab/experiments">Experiments</Button>
    <Title>All experiments</Title>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
      <VideoPreview v-for="file in files?.slice(0, 36)" :file="file" />
    </div>
  </Stack>
</template>
