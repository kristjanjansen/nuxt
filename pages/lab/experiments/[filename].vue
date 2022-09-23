<script setup lang="ts">
const route = useRoute();
const { filename } = route.params;
const { getFiles } = useFiles();
const path = "records";
const { data: files } = await getFiles(path);
const file = computed(() => {
  return files.value?.filter((file) => file.filename === filename)[0];
});
const formatVideo = (file) => {
  return [
    `Stars at   ${file.start_at_formatted} ${
      useFormattedDistance(new Date(file.start_at)).value
    }`,
    `Ends at    ${file.end_at_formatted}`,
    `Duration   ${file.duration_formatted}`,
  ].join("\n");
};
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small to="/lab/experiments" left>Back</Button>
    <Title>{{ file?.streamkey }}</Title>
    <div class="whitespace-pre-wrap break-all font-mono text-sm text-gray-200">
      {{ file ? formatVideo(file) : "" }}<br />
    </div>
    <VideoDetails :video="file" />
    <pre>{{ file }}</pre>
  </Stack>
</template>
