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
      <img class="h-24 w-24 rounded" :src="episode.itunes.image" />
    </div>
    <Stack>
      <Title medium>{{ episode.title }}</Title>
      <div class="text-sm text-gray-500">
        {{ formatDatetime(new Date(episode.isoDate)) }}
      </div>
      <Content
        :breakall="episode.itunes.episode === '2'"
        :content="episode['content:encoded']"
      />
      <audio
        class="mix w-full"
        :class="['invert', ''][theme]"
        controls
        :src="episode.enclosure.url"
      />
      <slot />
    </Stack>
  </div>
</template>
