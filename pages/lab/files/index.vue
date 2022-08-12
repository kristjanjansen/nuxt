<script setup lang="ts">
const paths = [
  "anthropologies1",
  "anthropologies2",
  "records",
  "strapi",
  "assets",
];
const processPath = (p) => ({ title: p, path: `/lab/files/${p}` });
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Title>Files</Title>
    <div class="grid w-full gap-4 md:grid-cols-5">
      <NuxtLink v-for="p in paths.map(processPath)" :to="p.path">
        <Card class="flex h-32 items-start gap-4">/{{ p.title }}</Card>
      </NuxtLink>
    </div>
  </Stack>
</template>
