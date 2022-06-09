<script setup lang="ts">
definePageMeta({
  title: "Some Page",
});

const today = new Date().toISOString().split("T")[0];

const { data: upcomingEvents } = await useEvents({
  filters: { start_at: { $gte: today } },
});
const { lang } = useLang();
</script>
<template>
  <Stack class="grid p-3 md:p-5 lg:grid-cols-[1fr_3fr]">
    <Stack>
      <Link left to="/" />
      <Title>{{ ["Upcoming events", "Tulevased sündmused"][lang] }}</Title>
      <Link right to="/schedule/past">
        {{ ["See the past events", "Vaata toimunud sündmusi"][lang] }}
      </Link>
    </Stack>
    <Stack>
      <EventRow v-for="event in upcomingEvents" :event="event" />
    </Stack>
  </Stack>
</template>
