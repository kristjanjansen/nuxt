<script setup lang="ts">
definePageMeta({
  title: "Some Page",
});

const { data: projects } = await useProjects();
const { lang } = useLang();
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Link left to="/" />
    <Title>
      {{ ["Projects", "Projektid"][lang] }}
    </Title>
    <div class="flex flex-col gap-6 md:grid md:grid-cols-4 md:gap-4">
      <NuxtLink
        v-for="project in projects"
        class="block h-full"
        :to="'/projects/' + project.slug"
      >
        <Stack>
          <Image
            class="aspect-square h-full rounded-2xl object-cover"
            :image="project.thumbnail"
          />
          <Title class="block !text-xl md:hidden">{{
            project.titles[lang]
          }}</Title>
        </Stack>
      </NuxtLink>
    </div>
  </Stack>
</template>
