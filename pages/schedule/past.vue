<script setup lang="ts">
definePageMeta({
  title: "Some Page",
});

const today = new Date().toISOString().split("T")[0];

const { data: upcomingEvents } = await useEvents({
  sort: ["start_at:desc"],
  filters: { start_at: { $lt: today } },
});
const { lang } = useLang();
</script>
<template>
  <Stack class="grid p-3 md:p-5 lg:grid-cols-[1fr_3fr]">
    <Stack>
      <Link left to="/" />
      <Title>{{ ["Past events", "Toimunud sündmused"][lang] }}</Title>
      <Link right to="/schedule">See the upcoming events</Link>
    </Stack>
    <Stack>
      <EventRow
        v-for="event in upcomingEvents"
        :event="event"
        class="opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0"
      />
    </Stack>
  </Stack>
</template>
