<script setup lang="ts">
type Props = {
  event: any;
};
const { event } = defineProps<Props>();
const { lang } = useLang();
</script>

<template>
  <div class="flex w-full gap-4 rounded transition">
    <NuxtLink
      :to="event.eventLink"
      class="aspect-square h-16 w-16 flex-shrink-0 md:h-20 md:w-20"
    >
      <Image class="h-full rounded-lg object-cover" :image="event.thumbnail" />
    </NuxtLink>
    <Stack>
      <NuxtLink :to="event.eventLink">
        <Stack class="!gap-2">
          <div>
            <Title v-if="event.authors" small class="text-gray-500">
              {{ event.authors }}
            </Title>
            <Title medium class="transition">
              {{ event.titles[lang] }}
            </Title>
          </div>
          <Content
            class="text-gray-500 transition"
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
