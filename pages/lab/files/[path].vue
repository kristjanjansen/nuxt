<script setup lang="ts">
const route = useRoute();
const { path } = route.params;

const { getFiles } = useFiles();
const { data: files, error } = await getFiles(path);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small to="/lab/files" left>Files</Button>
    <Title>/{{ path }}</Title>
    {{ error }}
    <div class="grid gap-6 md:grid-cols-4 2xl:grid-cols-6">
      <FileCard v-for="file in files" :file="file" />
    </div>
  </Stack>
</template>
