<script setup lang="ts">
type Props = {
  event: any;
};
defineProps<Props>();
const { lang } = useLang();
</script>

<template>
  <Card
    class="grid gap-6 transition-all hover:bg-gray-900 md:grid-cols-[150px_auto_3fr_2fr_150px]"
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
        <Title medium>{{ event.titles[lang] }}</Title>
        <Content nolinks :content="event.intros[lang]" />
      </Stack>
    </NuxtLink>
    <NuxtLink :to="event.projectLink">
      <div v-if="event.projects.length">
        <Title small>{{ event.projects[0].title }} </Title>
        <div class="text-gray-500" v-html="event.projects[0].authors" />
      </div>
    </NuxtLink>
    <NuxtLink :to="event.eventLiveLink">
      <Button primary>Live event!</Button>
    </NuxtLink>
  </Card>
</template>
