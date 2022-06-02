<script setup lang="ts">
import Parser from "rss-parser/dist/rss-parser.js";

definePageMeta({
  title: "Podcast",
  ttl: 60 * 30,
});

const { data: podcast } = usePodcast();

const { theme } = useTheme();
</script>
<template>
  <Stack class="p-8" v-if="podcast">
    <Title class="!md:text-6xl !text-4xl">{{ podcast.title }}</Title>
    <p />
    <div class="flex flex-col gap-8 md:grid md:grid-cols-[1fr_3fr]">
      <Stack>
        <img :src="podcast.itunes.image" />
        <Markdown :markdown="podcast.description"
      /></Stack>
      <Stack>
        <Item v-for="item in podcast.items" :item="item" />
      </Stack>
    </div>
  </Stack>
</template>
