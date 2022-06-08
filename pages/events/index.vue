<script setup lang="ts">
definePageMeta({
  title: "Some Page",
});

const { data: events } = await useFind("events", {
  sort: ["createdAt:desc"],
  populate: ["localizations", "projects", "images", "thumbnail"],
});

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
        <NuxtLink :to="'/events/' + event.slug">
          <div
            v-html="event.start_at.replace('T', ' ').replace(':00.000Z', '')"
          />
        </NuxtLink>
        <NuxtLink :to="'/events/' + event.slug">
          <div class="aspect-square flex-shrink-0 md:w-24">
            <Image class="h-full object-cover" :image="event.thumbnail" />
          </div>
        </NuxtLink>
        <NuxtLink :to="'/events/' + event.slug">
          <Stack>
            <Title class="text-lg">{{ event.titles[lang] }}</Title>
            <Markdown nolinks :markdown="event.intros[lang]" />
          </Stack>
        </NuxtLink>
        <NuxtLink :to="'/projects/' + event.projects[0].slug">
          <div>
            <div class="font-bold" v-html="event.projects[0].title" />
            <div class="text-gray-500" v-html="event.projects[0].authors" />
          </div>
        </NuxtLink>
      </Card>
    </Stack>
  </Stack>
</template>
