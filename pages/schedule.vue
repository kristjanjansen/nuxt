<script setup lang="ts">
definePageMeta({
  title: "Some Page",
});

const { data: events } = await useEvents();
const { lang } = useLang();
</script>
<template>
  <Stack class="grid p-3 md:grid-cols-[1fr_4fr] md:p-5">
    <Title>{{ ["Events", "Sündmused"][lang] }}</Title>
    <Stack>
      <Card
        v-for="event in events"
        class="grid gap-4 transition-all hover:bg-gray-900 md:grid-cols-[100px_auto_3fr_2fr]"
      >
        <NuxtLink :to="event.eventLink">
          <div v-html="event.start_at" />
        </NuxtLink>
        <NuxtLink :to="event.eventLink">
          <div class="aspect-square flex-shrink-0 md:w-24">
            <Image class="h-full object-cover" :image="event.thumbnail" />
          </div>
        </NuxtLink>
        <NuxtLink :to="event.eventLink">
          <Stack>
            <Title class="text-lg">{{ event.titles[lang] }}</Title>
            <Markdown nolinks :markdown="event.intros[lang]" />
          </Stack>
        </NuxtLink>
        <NuxtLink :to="event.projectLink">
          <div>
            <div class="font-bold" v-html="event.projects[0].title" />
            <div class="text-gray-500" v-html="event.projects[0].authors" />
          </div>
        </NuxtLink>
      </Card>
    </Stack>
  </Stack>
</template>
