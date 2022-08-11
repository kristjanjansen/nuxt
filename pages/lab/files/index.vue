<script setup lang="ts">
const { getFiles } = useFiles();
const files = ref();

const get = async (path) => {
  const { data } = await getFiles(path);
  files.value = (data.value || [])
    .map((file) => processFile(file, path))
    .sort(sortEvents);
};
const paths = ["assets", "backups", "files", "records", "snapshots", "strapi"];
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Title>Files</Title>
    <div class="flex gap-2">
      <Button v-for="d in paths" @click="get(d)">
        {{ d }}
      </Button>
    </div>
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
          :to="f.route"
          class="overflow-auto whitespace-pre font-mono"
          >{{ f }}</NuxtLink
        >
      </Card>
    </Stack>
  </Stack>
</template>
