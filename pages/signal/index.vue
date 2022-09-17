<script setup lang="ts">
definePageMeta({
  title: "Podcast",
  ttl: 60 * 30,
});

const { data: podcastPage, error: podcastPageError } = await usePodcastPage();
const { data: podcast, error: podcastError } = await usePodcast();

const { lang } = useLang();
const episodes = computed(() =>
  podcast.value?.items.filter((i) => i.itunes.episode)
);
</script>
<template>
  <ErrorCard v-if="podcastPageError || podcastError" />
  <Stack v-else class="gap-6 p-4 md:p-6">
    <div class="grid gap-6 md:grid-cols-[2fr_5fr_1fr]">
      <Stack>
        <Link left to="/" />
        <Title>
          {{ podcastPage.titles[lang] }}
        </Title>
      </Stack>
      <Subtitle>
        {{ podcastPage.intros[lang] }}
      </Subtitle>
    </div>
    <Images v-if="podcastPage.images" :images="podcastPage.images" />
    <Stack>
      <div class="grid gap-6 md:grid-cols-[5fr_3fr]">
        <Card class="grid gap-6 md:grid-cols-[2fr_3fr]">
          <Details :details="parseDetails(podcastPage.detailss[lang])" />
          <Content :content="podcastPage.descriptions[lang]" />
        </Card>
        <Card v-if="episodes">
          <Stack class="gap-6">
            <Title>{{ ["Latest episodes", "Viimased saated"][lang] }}</Title>
            <PodcastEpisode v-for="episode in episodes" :episode="episode" />
          </Stack>
        </Card>
      </div>
    </Stack>
  </Stack>
</template>
