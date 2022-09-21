<script setup lang="ts">
definePageMeta({
  layout: "elayout",
});

const { data: currentProjects, error: currentError } = await useProjects({
  filters: { slug: { $notIn: ["signal", "kohe2022"] }, pinned: { $eq: true } },
});

const { data: pastProjects, error: pastError } = await useProjects({
  filters: { slug: { $notIn: ["signal", "kohe2022"] }, pinned: { $eq: false } },
});
const { lang } = useLang();
</script>

<template>
  <ErrorCard v-if="currentError || pastError" />
  <Stack v-else class="p-4 md:p-6">
    <Button small left to="/" class="block md:hidden" />
    <Title>
      {{ ["Projects", "Projektid"][lang] }}
    </Title>
    <div class="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-4">
      <NuxtLink
        v-for="project in currentProjects"
        class="block h-full"
        :to="'/projects/' + project.slug"
      >
        <ProjectCard :project="project" />
      </NuxtLink>
    </div>
    <div class="h-8" />
    <Title>
      {{ ["Past projects", "Varasemad projektid"][lang] }}
    </Title>
    <div class="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-4">
      <NuxtLink
        v-for="project in pastProjects"
        class="block h-full"
        :to="'/projects/' + project.slug"
      >
        <ProjectCard :project="project" />
      </NuxtLink>
    </div>
  </Stack>
</template>
