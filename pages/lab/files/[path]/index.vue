<script setup lang="ts">
const route = useRoute();
const { path } = route.params;

const { getFiles } = useFiles();

const { data } = await getFiles(path);
const files = computed(() =>
  (data.value || []).map((file) => processFile(file, path)).sort(sortEvents)
);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Link to="/lab/files" left>Files</Link>
    <Title>/{{ path }}</Title>
    <Stack class="w-full">
      <Card v-for="f in files" class="flex items-start gap-4">
        <video
          v-if="f.src.endsWith('.mp4')"
          :src="f.src"
          controls
          class="aspect-video w-72 shrink-0 rounded"
        />
        <audio
          v-if="f.src.endsWith('.mp3')"
          :src="f.src"
          controls
          class="w-72 shrink-0"
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
          class="w-72 shrink-0 rounded"
        />
        <NuxtLink
          :to="f.fileRoute"
          class="overflow-auto whitespace-pre font-mono"
        >
          {{ f }}
        </NuxtLink>
      </Card>
    </Stack>
  </Stack>
</template>
