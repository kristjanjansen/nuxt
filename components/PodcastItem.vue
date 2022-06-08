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
  <Card>
    <Stack>
      <NuxtLink :to="'/podcast/' + (item.itunes.episode || item.guid)">
        <Title medium>{{ item.title }}</Title>
      </NuxtLink>
      <Content :content="item['content:encoded']" />
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
