<script setup lang="ts">
const route = useRoute();
const { filename } = route.params;
const { getFiles } = useFiles();
const path = "records";
const { data: files } = await getFiles(path);

const file = computed(() => {
  return files.value?.filter((file) => file.filename === filename)[0];
});
</script>

<template>
  <Stack v-if="file" class="p-4 md:p-6">
    <Button small to="/lab/experiments" left>Back</Button>
    <Title>{{ file.streamkey }}</Title>
    <Code>
      {{
        formatData({
          "Start at": file.start_at_formatted,
          "End at": file.end_at_formatted,
          Duration: file.duration_formatted,
        })
      }}
    </Code>
    <Code>{{ file }}</Code>
  </Stack>
</template>
