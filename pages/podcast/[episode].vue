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
  <Stack class="p-3 md:p-5">
    <NuxtLink to="/podcast">
      <Title medium class="!md:text-6xl !text-4xl">elektron.signal</Title>
    </NuxtLink>
    <p />
    <Item :item="item" />
  </Stack>
</template>
