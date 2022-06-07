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
  <Stack class="p-8">
    <NuxtLink to="/podcast">
      <TitleSmall class="!md:text-6xl !text-4xl">elektron.signal</TitleSmall>
    </NuxtLink>
    <p />
    <Item :item="item" />
  </Stack>
</template>
