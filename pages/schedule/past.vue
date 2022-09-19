<script setup lang="ts">
definePageMeta({
  title: "Some Page",
});

const today = new Date().toISOString().split("T")[0];

const { data: upcomingEvents, error } = await useEvents({
  sort: ["start_at:desc"],
  filters: { start_at: { $lt: today } },
});
const { lang } = useLang();
</script>
<template>
  <ErrorCard v-if="error" />
  <Stack v-else class="grid p-3 md:p-5 lg:grid-cols-[1fr_3fr]">
    <Stack>
      <Button small left to="/schedule" />
      <Title>{{ ["Past events", "Toimunud sündmused"][lang] }}</Title>
      <Button to="/schedule">{{
        ["See the upcoming events", "Tulevased sündmused"][lang]
      }}</Button>
    </Stack>
    <Stack>
      <EventRow
        v-for="event in upcomingEvents"
        :event="event"
        class="opacity-80 transition-all hover:opacity-100"
      />
    </Stack>
  </Stack>
</template>
