<script setup lang="ts">
const route = useRoute();
const slug = route.params.event_slug;

const { data: event, error } = await useEventBySlug(slug as string);
const { lang } = useLang();
</script>

<template>
  <ErrorCard v-if="error" />
  <Stack v-else class="items-stretch p-4 md:p-6">
    <div class="grid md:grid-cols-[5fr_1fr]">
      <div class="grid gap-8 md:grid-cols-[1fr_2fr]">
        <Stack>
          <Link left :to="event.projectLink">
            {{ ["Project", "Projekt"][lang] }}
          </Link>
          <div>
            <Title v-if="event.authors" medium class="text-gray-500"
              >{{ event.authors }}
            </Title>
            <Title>
              {{ event.titles[lang] }}
            </Title>
          </div>
          <EventDatetime :event="event" />
        </Stack>
        <Subtitle>
          {{ event.intros[lang] }}
        </Subtitle>
      </div>
      <EventButton class="justify-self-end" :event="event" />
    </div>
    <Images :images="event.images" />
    <div class="grid md:grid-cols-[5fr_1fr]">
      <Card
        v-if="event.details || event.description"
        class="grid gap-8 md:grid-cols-[1fr_2fr]"
      >
        <Details :details="parseDetails(event.detailss[lang])" />
        <Content :content="event.descriptions[lang]" />
      </Card>
      <div />
    </div>
  </Stack>
</template>
