<script setup lang="ts">
const route = useRoute();
const slug = route.params.episode;

const { data: podcast } = usePodcast();
const item = computed(() =>
  podcast.value?.items.find((i) =>
    i.itunes.episode ? i.itunes.episode === slug : i.guid === slug
  )
);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Link left to="/podcast">Podcast</Link>
    <Title>elektron.signal</Title>
    <PodcastItem :item="item" />
  </Stack>
</template>
