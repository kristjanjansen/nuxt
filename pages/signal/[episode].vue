<script setup lang="ts">
const route = useRoute();
const slug = route.params.episode;

const { data: podcast, error } = usePodcast();
const item = computed(() =>
  podcast.value?.items.find((i) =>
    i.itunes.episode ? i.itunes.episode === slug : i.guid === slug
  )
);
</script>

<template>
  <ErrorCard v-if="error" />
  <Stack v-else class="relative grid h-full p-4 md:place-items-center md:p-6">
    <Breadboard class="hidden md:block" />
    <!-- <Link left to="/signal">Podcast</Link>
    <Title>elektron.signal</Title> -->
    <Link class="md:absolute md:top-5 md:left-5" left to="/signal">
      Podcast
    </Link>
    <div class="bg-black md:absolute md:w-[60vw]">
      <PodcastItem :item="item" />
    </div>
  </Stack>
</template>
