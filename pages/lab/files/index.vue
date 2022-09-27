<script setup lang="ts">
definePageMeta({
  labTitle: "Files",
  labIntro: "Browse the files in the storage",
  labGroup: "Tools",
});

const paths = [
  { title: "anthropologies1", desc: "Ruumiantropoloogiad I video captures" },
  { title: "anthropologies2", desc: "Ruumiantropoloogiad II video captures" },
  { title: "strapi", desc: "Strapi images and videos" },
  { title: "assets", desc: "Misc media files for experiments" },
];
const processPath = (p) => ({ ...p, path: `/lab/files/${p.title}` });
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">Lab</Button>
    <Title>Files</Title>
    <div class="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
      <LinkCard v-for="p in paths.map(processPath)" :to="p.path" class="h-48">
        <Title small>/{{ p.title }}</Title>
        <p class="tracking-wide text-gray-500">{{ p.desc }}</p>
      </LinkCard>
    </div>
  </Stack>
</template>
