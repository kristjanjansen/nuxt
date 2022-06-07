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
  <div class="grid p-4 md:grid-cols-[1fr_4fr]">
    <Title>{{ ["Events", "Sündmused"][lang] }}</Title>
    <Stack>
      <Card
        v-for="event in events"
        class="grid grid-cols-[100px_auto_3fr_2fr] gap-4 transition-all hover:bg-gray-900"
      >
        <NuxtLink :to="'/events/' + event.slug">
          <div
            v-html="
              event.start_at.replace(':00.000Z', '').split('T').join('<br />')
            "
          />
        </NuxtLink>
        <NuxtLink :to="'/events/' + event.slug">
          <div class="aspect-square w-24 flex-shrink-0">
            <Image class="h-full object-cover" :image="event.thumbnail" />
          </div>
        </NuxtLink>
        <NuxtLink :to="'/events/' + event.slug">
          <Stack>
            <TitleSmall class="text-lg">{{ event.titles[lang] }}</TitleSmall>
            <Markdown
              nolinks
              :markdown="event.intros[lang]"
              class="text-gray-500"
            />
          </Stack>
        </NuxtLink>
        <NuxtLink :to="'/projects/' + event.projects[0].slug">
          <div class="px-8">
            <div class="font-bold" v-html="event.projects[0].title" />
            <div class="text-gray-500" v-html="event.projects[0].authors" />
          </div>
        </NuxtLink>
      </Card>
    </Stack>
  </div>
</template>
