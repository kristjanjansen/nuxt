<script setup lang="ts">
type Props = {
  project: any;
};
defineProps<Props>();
const { lang } = useLang();
</script>

<template>
  <Card class="p-0">
    <Title class="p-4">{{ ["Events", "Sündmused"][lang] }}</Title>
    <Stack>
      <div v-for="event in project.events" class="flex gap-4 p-4">
        <NuxtLink
          :to="event.eventLink"
          class="aspect-square h-20 w-20 flex-shrink-0"
        >
          <Image
            class="h-full rounded-lg object-cover"
            :image="event.thumbnail || project.thumbnail"
          />
        </NuxtLink>
        <Stack>
          <NuxtLink :to="event.eventLink">
            <Stack>
              <Title medium>{{ event.title }}</Title>
              <Content
                class="text-gray-500"
                nolinks
                :content="(event.intro || event.description).slice(0, 90)"
              />
              <EventDatetime :event="event" />
            </Stack>
          </NuxtLink>
          {{ event.eventLiveLink ? "yes" : "no" }}
          <EventButton :event="event" />
        </Stack>
      </div>
    </Stack>
  </Card>
</template>
