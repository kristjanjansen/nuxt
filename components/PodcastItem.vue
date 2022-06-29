<script setup lang="ts">
import { PodcastItem } from "~~/composables/podcast";
import { formatDatetime } from "~~/composables/datetime";

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
      <img class="h-32 w-32 rounded" :src="item.itunes.image" />
    </div>
    <Stack class="border-t border-gray-700 p-4 md:border-t-0 md:border-l">
      <NuxtLink :to="'/podcast/' + (item.itunes.episode || item.guid)">
        <Title medium>{{ item.title }}</Title>
      </NuxtLink>
      <!-- @TODO: Edit the content to remove this -->
      <div class="text-sm text-gray-500">
        {{ formatDatetime(new Date(item.isoDate)) }}
      </div>
      <Content
        :breakall="item.itunes.episode === '2'"
        :content="item['content:encoded']"
      />
      <Link down :to="item.enclosure.url">
        {{ ["Download", "Laadi alla"][lang] }}
        {{ Math.floor(parseFloat(item.enclosure.length) / 1024 / 1024) }}MB MP3
      </Link>
      <audio
        class="w-full"
        :class="['invert', ''][theme]"
        controls
        :src="item.enclosure.url"
      />
    </Stack>
  </Card>
</template>
