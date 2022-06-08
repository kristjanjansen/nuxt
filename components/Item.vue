<script setup lang="ts">
import { Item } from "~~/composables/podcast";

interface Props {
  item: Item;
}
const { item } = defineProps<Props>();

const { theme } = useTheme();
</script>

<template>
  <Card>
    <Stack>
      <NuxtLink :to="'/podcast/' + (item.itunes.episode || item.guid)">
        <Title medium>{{ item.title }}</Title>
      </NuxtLink>
      <Markdown :markdown="item['content:encoded']" />
      <audio
        class="w-full md:w-auto"
        :class="['invert', ''][theme]"
        controls
        :src="item.enclosure.url"
      />
    </Stack>
  </Card>
</template>
