<script setup lang="ts">
// import { ref } from "vue";
// import { $fetch } from "ohmyfetch";
import Parser from "rss-parser/dist/rss-parser.js";
// import { config } from ".";

// export async function usePodcastRss() {
//   const rss = ref<any>();
//   let parser = new Parser();
//   const rssSource: any = await $fetch(config.podcastRssUrl as string);
//   const rssContent: any = await parser.parseString(rssSource.contents);
//   rss.value = rssContent;
//   return rss;
// }

const rssUrl = "https://elektronsignal.captivate.fm/rssfeed";
const parser = new Parser();

const { data: podcast } = await useAsyncData("podcasts", () => {
  console.log("a");
  return $fetch(rssUrl, {
    headers: {
      Accept: "application/rss+xml",
      "Access-Control-Allow-Origin": "*",
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
