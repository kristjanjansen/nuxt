<script setup lang="ts">
import Parser from "rss-parser/dist/rss-parser.js";

definePageMeta({
  title: "Podcast",
  ttl: 60 * 30,
});

const rssUrl = "https://elektronsignal.captivate.fm/rssfeed";
const parser = new Parser();

const { data: podcast } = await useAsyncData("podcasts", () => {
  return $fetch(rssUrl, {
    headers: {
      Accept: "application/rss+xml",
    },
  }).then((rss: string) => {
    return parser.parseString(rss);
  });
});
</script>
<template>
  <Stack class="p-8">
    <Title class="!text-6xl">{{ podcast.title }}</Title>
    <p />
    <div class="grid grid-cols-[1fr_3fr] gap-8">
      <Stack>
        <img :src="podcast.itunes.image" />
        <Markdown :markdown="podcast.description"
      /></Stack>
      <Stack>
        <Card v-for="item in podcast.items">
          <Stack>
            <Title>{{ item.title }}</Title>
            <Markdown :markdown="item['content:encoded']" />
            <audio controls :src="item.enclosure.url" />
          </Stack>
        </Card>
      </Stack>
    </div>
    <pre>{{ podcast }}</pre>
  </Stack>
</template>
