<script setup lang="ts">
const route = useRoute();
const { path, filename } = route.params;
const { getFiles } = useFiles();
const { data } = await getFiles(path);
const f = processFile(data.value[0], path);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Link to="/lab/files" left>Files</Link>
    <Title>File</Title>
    <video
      v-if="f.src.endsWith('.mp4')"
      :src="f.src"
      controls
      class="aspect-video w-1/2 shrink-0 rounded"
    />
    <audio
      v-if="f.src.endsWith('.mp3')"
      :src="f.src"
      controls
      class="w-1/2 shrink-0"
    />
    <img
      v-if="
        f.src.endsWith('.jpg') ||
        f.src.endsWith('.jpeg') ||
        f.src.endsWith('.png') ||
        f.src.endsWith('.gif') ||
        f.src.endsWith('.svg')
      "
      :src="f.src"
      class="w-1/2 shrink-0 rounded"
    />
    <pre>{{ f }}</pre>
  </Stack>
</template>
