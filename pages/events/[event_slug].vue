<script setup lang="ts">
import IconArrowLeft from "~icons/radix-icons/arrow-left";

const route = useRoute();
const slug = route.params.event_slug;

// // data, pending, refresh, error
// const { data: event } = await useAsyncData(`events/${slug}`, () =>
//   find<any>("events", { slug }).then((events) => events[0])
// );

const { data: event } = await useFindOne("events", {
  filters: {
    slug: { $eq: slug },
  },
  populate: ["localizations", "images", "projects"],
  locale: "en",
});

const { lang } = useLang();
</script>

<template>
  <Stack class="gap-8 p-12">
    <TitleLarge class="!text-6xl">
      <div v-html="event.titles[lang]" />
    </TitleLarge>
    <div class="flex gap-5 overflow-x-auto">
      <Image
        class="aspect-auto w-96 rounded-3xl object-cover"
        v-for="image in event.images"
        :image="image"
      />
    </div>
    <Markdown :markdown="event.descriptions[lang]" />
  </Stack>
</template>
