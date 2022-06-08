<script setup lang="ts">
const route = useRoute();
const slug = route.params.event_slug;

const { data: event } = await useEventBySlug(slug);
const { lang } = useLang();
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Link left :to="event.projectLink">
      {{ ["Project", "Projekt"][lang] }}
    </Link>
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
            v-html="event.detailss[lang]"
          />
          <Content :content="event.descriptions[lang]" />
        </div>
      </Card>
    </div>
  </Stack>
</template>
