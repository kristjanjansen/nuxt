<script setup lang="ts">
const route = useRoute();
const slug = route.params.event_slug;

const { data: event } = await useEventBySlug(slug);
const { lang } = useLang();
</script>

<template>
  <Stack class="p-4 md:p-6">
    <div class="grid gap-8 md:grid-cols-[2fr_4fr_auto]">
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
      <NuxtLink :to="event.eventLiveLink">
        <Button primary>Go to event</Button>
      </NuxtLink>
    </div>
    <div class="flex gap-5 overflow-x-auto">
      <Image
        class="aspect-auto h-72 rounded-3xl object-cover"
        :class="[event.images.length === 1 ? '!aspect-video' : '']"
        v-for="image in event.images"
        :image="image"
      />
    </div>
    <div class="grid gap-5">
      <Card>
        <div class="grid gap-8 md:grid-cols-[1fr_3fr_2fr]">
          <div
            class="text-xs leading-loose text-gray-400"
            v-html="event.detailss[lang]"
          />
          <Content :content="event.descriptions[lang]" />
        </div>
      </Card>
    </div>
  </Stack>
</template>
