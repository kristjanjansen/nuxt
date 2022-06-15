<script setup lang="ts">
definePageMeta({
  title: "Some Page",
});

const { data: pinnnedProjects, error } = await useProjects({
  //filters: { pinned: "$true" },
});
const { lang } = useLang();
</script>

<template>
  <ErrorCard v-if="error" />
  <Stack v-else class="p-4 md:p-6">
    <Link left to="/" />
    <Title>
      {{ ["Projects", "Projektid"][lang] }}
    </Title>
    <div class="flex flex-col gap-6 md:grid md:grid-cols-4 md:gap-4">
      <NuxtLink
        v-for="project in pinnnedProjects"
        class="block h-full"
        :to="'/projects/' + project.slug"
      >
        <Stack>
          <Image
            class="aspect-square h-full rounded-2xl object-cover"
            :image="project.thumbnail"
          />
          <Title class="block !text-xl">
            {{ project.titles[lang] }}
          </Title>
        </Stack>
      </NuxtLink>
    </div>
  </Stack>
</template>
