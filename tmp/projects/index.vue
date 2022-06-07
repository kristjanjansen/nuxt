<script setup lang="ts">
definePageMeta({
  title: "Some Page",
});

const { data: projects } = await useFind("projects", {
  sort: ["createdAt:desc"],
  populate: ["localizations", "events", "thumbnail"],
});

const { lang } = useLang();
</script>

<template>
  <Stack class="p-8">
    <Title class="!md:text-6xl !text-4xl">
      {{ ["Projects", "Projektid"][lang] }}
    </Title>
    <p />
    <div class="grid grid-cols-4 gap-4">
      <NuxtLink
        class="block h-full"
        v-for="project in projects"
        :to="'/projects/' + project.slug"
      >
        <!-- <Image
          class="aspect-square h-full rounded-2xl object-cover"
          :image="project.thumbnail"
        /> -->
      </NuxtLink>
    </div>
  </Stack>
</template>
