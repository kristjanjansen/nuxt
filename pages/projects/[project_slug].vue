<script setup lang="ts">
const route = useRoute();
const slug = route.params.project_slug;

const { data: project } = await useFindOne("projects", {
  filters: {
    slug: { $eq: slug },
  },
  populate: ["images", "localizations"],
});
</script>

<template>
  <Stack class="gap-8 p-12">
    <Title class="!text-6xl">{{ project.title }}</Title>
    <div class="flex gap-5 overflow-x-auto">
      <Image
        class="aspect-video h-64 rounded-3xl object-cover"
        v-for="image in project.images"
        :image="image"
      />
    </div>
    <Markdown :markdown="project.description" />
  </Stack>
</template>
