<script setup lang="ts">
type Props = {
  project: any;
};
const { project } = defineProps<Props>();
const { lang } = useLang();
</script>

<template>
  <Stack>
    <Image
      class="aspect-square h-full rounded-2xl object-cover"
      :image="project.thumbnail"
    />
    <!-- <Title class="block">
      {{ project.titles[lang] }}
    </Title>
    <div v-for="event in project.events">
      <Title small>{{ event.title }}</Title>
      <EventDatetime :event="event" />
    </div> -->
  </Stack>
</template>
