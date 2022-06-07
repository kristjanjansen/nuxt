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
  <div class="p-4">
    <Stack>
      <TitleLarge>{{ ["Events", "Sündmused"][lang] }}</TitleLarge>
      <NuxtLink v-for="event in events" :to="'/'">
        <Card>
          <Stack>
            <Title>{{ event.titles[lang] }}</Title>
          </Stack>
          <Stack>{{ event.intros[lang] }}</Stack>
        </Card>
      </NuxtLink>
    </Stack>
  </div>
</template>
