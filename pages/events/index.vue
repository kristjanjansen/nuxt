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
  <Stack class="p-8">
    <Title class="!md:text-6xl !text-4xl">{{ ["Events", "Kava"][lang] }}</Title>
    <Stack>
      <NuxtLink v-for="event in events" :to="'/events/' + event.slug">
        <Card class="grid grid-cols-[1fr_5fr] gap-4 hover:bg-black">
          <div>
            <!-- <Image
              class="aspect-square h-full object-cover"
              :image="event.thumbnail"
            /> -->
          </div>
          <Stack>
            <Title class="text-lg">{{ event.titles[lang] }}</Title>
            <Markdown :markdown="event.intros[lang]" />
          </Stack>
        </Card>
      </NuxtLink>
    </Stack>
  </Stack>
</template>
