<script setup lang="ts">
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
  populate: ["localizations", "images"],
  locale: "en",
});

const { lang } = useLang();
</script>

<template>
  <Stack class="gap-8 p-12">
    <Title class="!text-6xl">{{ event.titles[lang] }}</Title>
    <div class="flex gap-5 overflow-x-auto">
      <!-- <Image
        class="aspect-video h-64 rounded-3xl object-cover"
        v-for="image in event.images"
        :image="image"
      /> -->
    </div>
    <Markdown :markdown="event.intros[lang]" />
  </Stack>
</template>
