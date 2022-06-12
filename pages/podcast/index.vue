<script setup lang="ts">
import Parser from "rss-parser/dist/rss-parser.js";

definePageMeta({
  title: "Podcast",
  ttl: 60 * 30,
});

const { data: podcast, pending } = await usePodcast();
const { data: project } = await useProjectsBySlug("signal");
const { lang } = useLang();
const items = computed(() =>
  podcast.value?.items.filter((i) => i.itunes.episode)
);
</script>
<template>
  <Stack class="gap-8 p-4 md:p-6">
    <div class="grid gap-8 md:grid-cols-[2fr_4fr]">
      <Stack>
        <Link left to="/" />
        <Title>
          {{ project.titles[lang] }}
        </Title>
      </Stack>
      <Title>
        {{ project.intros[lang] }}
      </Title>
    </div>
    <div class="flex gap-5 overflow-x-auto">
      <Image
        class="aspect-auto h-72 rounded-3xl object-cover"
        :class="[project.images.length === 1 ? '!aspect-video' : '']"
        v-for="image in project.images"
        :image="image"
      />
    </div>
    <Stack class="p-3 md:p-5">
      <div class="flex flex-col gap-8 md:grid md:grid-cols-[2fr_4fr]">
        <Stack>
          <Content :content="project.descriptions[lang]" />
        </Stack>
        <Stack v-if="items">
          <PodcastItem v-for="item in items" :item="item" />
        </Stack>
        <div v-else>Loading</div>
      </div>
    </Stack>
  </Stack>
</template>
