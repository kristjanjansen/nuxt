<script setup lang="ts">
import Parser from "rss-parser/dist/rss-parser.js";

definePageMeta({
  title: "Podcast",
  ttl: 60 * 30,
});

const rssUrl =
  "https://api.allorigins.win/get?url=https://elektronsignal.captivate.fm/rssfeed";
const parser = new Parser();

const { data: podcast } = await useAsyncData("podcast", () => {
  return $fetch(rssUrl).then((res: any) => {
    return parser.parseString(res.contents);
  });
});
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
        <Card v-for="item in podcast.items">
          <Stack>
            <Title>{{ item.title }}</Title>
            <Markdown :markdown="item['content:encoded']" />
            <audio
              class="w-full md:w-auto"
              controls
              :src="item.enclosure.url"
            />
          </Stack>
        </Card>
      </Stack>
    </div>
  </Stack>
</template>
