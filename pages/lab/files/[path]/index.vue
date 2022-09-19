<script setup lang="ts">
const route = useRoute();
const { path } = route.params;

const { getFiles } = useFiles();
const { data: files } = await getFiles(path);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small to="/lab/files" left>Files</Button>
    <Title>/{{ path }}</Title>
    <Stack class="w-full">
      <Card
        v-for="file in files"
        class="grid w-full items-center gap-4 overflow-hidden p-0 md:grid-cols-[auto_1fr_auto_auto] md:gap-8"
      >
        <div>
          <video
            v-if="file.src.endsWith('.mp4')"
            :src="file.src"
            controls
            class="aspect-video w-full shrink-0 md:w-64"
          />
          <div class="p-4" v-if="file.src.endsWith('.mp3')">
            <audio :src="file.src" controls class="w-full shrink-0 md:w-64" />
          </div>
          <img
            v-if="
              file.src.endsWith('.jpg') ||
              file.src.endsWith('.jpeg') ||
              file.src.endsWith('.png') ||
              file.src.endsWith('.gif') ||
              file.src.endsWith('.svg')
            "
            :src="file.src"
            class="shrink-0 md:w-64"
          />
        </div>
        <NuxtLink :to="file.fileRoute">
          <FileDetails class="px-6" :file="file" />
        </NuxtLink>
        <Button small down class="px-6" :to="file.src">Download</Button>
        <p />
      </Card>
    </Stack>
  </Stack>
</template>
