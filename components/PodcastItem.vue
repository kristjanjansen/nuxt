<script setup lang="ts">
import { PodcastItem } from "~~/composables/podcast";

interface Props {
  item: PodcastItem;
}
const { item } = defineProps<Props>();
const { theme } = useTheme();
const { lang } = useLang();
</script>

<template>
  <Card class="p-0 md:flex">
    <div class="shrink-0 p-4">
      <img class="h-24 w-24 rounded" :src="item.itunes.image" />
    </div>
    <Stack class="border-t border-gray-700 p-4 md:border-t-0 md:border-l">
      <NuxtLink :to="'/podcast/' + (item.itunes.episode || item.guid)">
        <Title medium>{{ item.title }}</Title>
      </NuxtLink>
      <!-- @TODO: Edit the content to remove this -->
      <Content
        :breakall="item.itunes.episode === '2'"
        :content="item['content:encoded']"
      />
      <Link :to="item.enclosure.url">{{
        ["download mp3", "laadi alla mp3"][lang]
      }}</Link>
      <audio
        class="debug w-full"
        :class="['invert', ''][theme]"
        controls
        :src="item.enclosure.url"
      />
    </Stack>
  </Card>
</template>
