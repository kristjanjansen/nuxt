<script setup lang="ts">
type Props = {
  event: any;
};
const { event } = defineProps<Props>();
const { lang } = useLang();
</script>

<template>
  <Card
    class="group grid gap-8 transition-all hover:bg-gray-900 md:grid-cols-[200px_auto_3fr_2fr_150px]"
  >
    <NuxtLink :to="event.eventLink">
      <EventDatetime :event="event" />
    </NuxtLink>
    <NuxtLink :to="event.eventLink">
      <div class="aspect-square flex-shrink-0 md:w-24">
        <Image class="h-full rounded object-cover" :image="event.thumbnail" />
      </div>
    </NuxtLink>
    <NuxtLink :to="event.eventLink">
      <Stack>
        <div>
          <Title v-if="event.authors" small class="text-gray-500">
            {{ event.authors }}
          </Title>
          <Title medium>{{ event.titles[lang] }}</Title>
        </div>
        <Content nolinks :content="event.intros[lang]" />
      </Stack>
    </NuxtLink>
    <NuxtLink :to="event.projectLink">
      <div v-if="event.projects?.length">
        <Title small>{{ event.projects[0].titles[lang] }} </Title>
      </div>
    </NuxtLink>
    <div>
      <EventButton :event="event" />
    </div>
  </Card>
</template>
