<script setup lang="ts">
const route = useRoute();
const slug = route.params.episode;

const { data: podcast } = usePodcast();
const item = computed(() =>
  podcast.value?.items.find((i) => i.itunes.episode === slug)
);
</script>

<template>
  <Stack class="p-12">
    <Title class="!md:text-6xl !text-4xl">elektron.signal</Title>
    <Item :item="item" />
  </Stack>
</template>
