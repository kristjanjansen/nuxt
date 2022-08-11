<script setup lang="ts">
const route = useRoute();
const { path, filename } = route.params;
const { getFiles } = useFiles();
const { data: files } = await getFiles(path);
const f = computed(() => {
  if (files?.value) {
    return files.value
      .filter((file) => file.filename === filename)
      .map(processFile)[0];
  }
  return null;
});
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Link :to="'/lab/files/' + path" left>Back</Link>
    <Title>/{{ path }}/{{ filename }}</Title>
    <LabVideo v-if="f.src.endsWith('.mp4')" :video="f" />
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
