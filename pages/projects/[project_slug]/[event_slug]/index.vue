<script setup lang="ts">
const route = useRoute();
const slug = route.params.event_slug;

const { data: event, error } = await useEventBySlug(slug);
const { lang } = useLang();
</script>

<template>
  <ErrorCard v-if="error" />
  <Stack v-else class="p-4 md:p-6">
    <div class="grid gap-8 md:grid-cols-[1fr_2fr_1fr]">
      <Stack>
        <Link left :to="event.projectLink">
          {{ ["Project", "Projekt"][lang] }}
        </Link>
        <Title>
          {{ event.titles[lang] }}
        </Title>
        <EventDatetime :event="event" />
      </Stack>
      <Title class="lg:pr-32">
        {{ event.intros[lang] }}
      </Title>
      <EventButton class="items-end" :event="event" />
    </div>
    <div class="flex gap-5 overflow-x-auto">
      <Image
        class="aspect-auto h-96 rounded-3xl object-cover"
        :class="[event.images.length === 1 ? '!aspect-video' : '']"
        v-for="image in event.images"
        :image="image"
      />
    </div>
    <div class="grid gap-8 md:grid-cols-[3fr_1fr]">
      <Card>
        <div class="grid gap-8 md:grid-cols-[1fr_2fr]">
          <Details :details="parseDetails(event.detailss[lang])" />
          <Content :content="event.descriptions[lang]" />
        </div>
      </Card>
      <div />
    </div>
  </Stack>
</template>
