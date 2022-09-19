<script setup lang="ts">
const paths = [
  { title: "records", desc: "Stored videos from Elektron streaming server" },
  { title: "assets", desc: "Misc media files for experiments" },
  { title: "anthropologies1", desc: "Ruumiantropoloogiad I video captures" },
  { title: "anthropologies2", desc: "Ruumiantropoloogiad II video captures" },
  { title: "strapi", desc: "Strapi images and videos" },
];
const processPath = (p) => ({ ...p, path: `/lab/files/${p.title}` });
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">Lab</Button>
    <Title>Files</Title>
    <div class="grid w-full gap-4 md:grid-cols-4">
      <LinkCard v-for="p in paths.map(processPath)" :to="p.path" class="h-48">
        <Title small>/{{ p.title }}</Title>
        <p class="tracking-wide text-gray-500">{{ p.desc }}</p>
      </LinkCard>
    </div>
  </Stack>
</template>
