<script setup lang="ts">
type Props = {
  event: any;
};
const { event } = defineProps<Props>();
const { lang } = useLang();
</script>

<template>
  <div class="flex w-full gap-4 rounded-2xl p-2 transition hover:bg-gray-900">
    <NuxtLink
      :to="event.eventLink"
      class="aspect-square h-20 w-20 flex-shrink-0"
    >
      <Image class="h-full rounded-lg object-cover" :image="event.thumbnail" />
    </NuxtLink>
    <Stack>
      <NuxtLink :to="event.eventLink">
        <Stack class="!gap-2">
          <Title medium>{{ event.titles[lang] }}</Title>
          <Content
            class="text-gray-500"
            nolinks
            :content="event.intros[lang]"
          />
          <EventDatetime :event="event" />
        </Stack>
      </NuxtLink>
      <EventButton :event="event" />
    </Stack>
  </div>
</template>
