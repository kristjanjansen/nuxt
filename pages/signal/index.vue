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
  <Stack v-else class="gap-8 p-4 md:p-6">
    <div class="grid gap-8 md:grid-cols-[2fr_4fr]">
      <Stack>
        <Link left to="/" />
        <Title>
          {{ podcastPage.titles[lang] }}
        </Title>
      </Stack>
      <Title>
        {{ podcastPage.intros[lang] }}
      </Title>
    </div>
    <div class="flex gap-5 overflow-x-auto">
      <Image
        v-for="image in podcastPage.images"
        :image="image"
        class="aspect-auto h-72 rounded-3xl object-cover"
        :class="[podcastPage.images.length === 1 ? '!aspect-video' : '']"
      />
    </div>
    <Stack class="p-3 md:p-5">
      <div class="flex flex-col gap-8 md:grid md:grid-cols-[2fr_4fr]">
        <Stack>
          <Content :content="podcastPage.descriptions[lang]" />
        </Stack>
        <Stack v-if="episodes">
          <Card v-for="episode in episodes">
            <PodcastEpisode :episode="episode" />
          </Card>
        </Stack>
      </div>
    </Stack>
  </Stack>
</template>
