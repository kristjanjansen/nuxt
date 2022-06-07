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
  <Stack class="p-[4vw]">
    <ButtonLeft to="/events">
      {{ ["Events", "Sündmused"][lang] }}
    </ButtonLeft>
    <Title>
      {{ event.titles[lang] }}
    </Title>
    <div class="flex gap-5 overflow-x-auto">
      <Image
        class="aspect-auto h-72 rounded-3xl object-cover"
        v-for="image in event.images"
        :image="image"
      />
    </div>
    <div class="grid gap-5">
      <Card>
        <div class="grid gap-8 md:grid-cols-[2fr_3fr]">
          <div
            class="text-gray-400 text-xs leading-loose"
            v-html="event.detailss[lang].replace(/\n/g, '<br>')"
          />
          <Markdown :markdown="event.descriptions[lang]" />
        </div>
      </Card>
    </div>
  </Stack>
</template>
