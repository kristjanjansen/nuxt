<script setup lang="ts">
import { PodcastEpisode } from "~~/composables/podcast";
import { formatDatetime } from "~~/composables/datetime";

interface Props {
  item: PodcastEpisode;
}
const { item } = defineProps<Props>();
const { theme } = useTheme();
const { lang } = useLang();
</script>

<template>
  <div class="gap-6 md:flex">
    <div class="shrink-0">
      <img class="h-32 w-32 rounded" :src="item.itunes.image" />
    </div>
    <Stack>
      <NuxtLink :to="'/signal/' + (item.itunes.episode || item.guid)">
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
  </div>
</template>
