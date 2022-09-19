<script setup lang="ts">
import { PodcastEpisode } from "~~/composables/podcast";
import { formatDatetime } from "~~/composables/datetime";

interface Props {
  episode: PodcastEpisode;
}
const { episode } = defineProps<Props>();
const { theme } = useTheme();
const { lang } = useLang();
</script>

<template>
  <div class="grid gap-4 md:grid-cols-[auto_auto]">
    <div class="shrink-0">
      <img class="h-32 w-32 rounded" :src="episode.itunes.image" />
    </div>
    <Stack>
      <NuxtLink :to="'/signal/' + (episode.itunes.episode || episode.guid)">
        <Title medium>{{ episode.title }}</Title>
      </NuxtLink>
      <!-- @TODO: Edit the content to remove this -->
      <div class="text-sm text-gray-500">
        {{ formatDatetime(new Date(episode.isoDate)) }}
      </div>
      <Content
        :breakall="episode.itunes.episode === '2'"
        :content="episode['content:encoded']"
      />
      <Button small down :href="episode.enclosure.url">
        {{ ["Download", "Laadi alla"][lang] }}
        {{ Math.floor(parseFloat(episode.enclosure.length) / 1024 / 1024) }}MB
        MP3
      </Button>
      <audio
        class="w-full"
        :class="['invert', ''][theme]"
        controls
        :src="episode.enclosure.url"
      />
    </Stack>
  </div>
</template>
