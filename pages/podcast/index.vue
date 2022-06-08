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
  <Stack class="p-3 md:p-5" v-if="podcast">
    <Link left to="/" />
    <Title>elektron.signal</Title>
    <div class="flex flex-col gap-8 md:grid md:grid-cols-[1fr_3fr]">
      <Stack>
        <img :src="podcast.itunes.image" class="rounded-xl" />
        <Content :content="podcast.description" />
      </Stack>
      <Stack>
        <PodcastItem v-for="item in podcast.items" :item="item" />
      </Stack>
    </div>
  </Stack>
</template>
