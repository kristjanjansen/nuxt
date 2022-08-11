<script setup lang="ts">
const { getFiles } = useFiles();
const dir = ref("");
const files = ref();
const get = async (dir) => {
  const { data } = await getFiles(dir);
  files.value = data;
};
const dirs = ["assets", "backups", "files", "records", "snapshots", "strapi"];
get(dirs[0]);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Title>Files</Title>
    <div class="flex gap-2">
      <Button v-for="d in dirs" @click="get(d)">
        {{ d }}
      </Button>
      <Textarea class="w-32" v-model="dir"></Textarea>
      <Button @click="get(dir)">Custom</Button>
    </div>
    <pre>{{ files }}</pre>
  </Stack>
</template>
