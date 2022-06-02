<script setup lang="ts">
const route = useRoute();
const slug = route.params.episode;

const { data: podcast } = usePodcast();
const episode = computed(() =>
  podcast.value?.items.find((i) => i.itunes.episode === slug)
);
</script>

<template>
  <Stack class="debug p-12">
    <pre>{{ episode }}</pre>
  </Stack>
</template>
