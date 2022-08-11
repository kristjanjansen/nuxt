<script setup lang="ts">
const paths = ["assets", "backups", "files", "records", "snapshots", "strapi"];
const processPath = (p) => ({ title: p, path: `/lab/files/${p}` });
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Title>Files</Title>
    <div class="grid w-full grid-cols-4 gap-4">
      <NuxtLink v-for="p in paths.map(processPath)" :to="p.path">
        <Card class="flex h-48 items-start gap-4">/{{ p.title }}</Card>
      </NuxtLink>
    </div>
  </Stack>
</template>
