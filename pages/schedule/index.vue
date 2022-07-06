<script setup lang="ts">
definePageMeta({
  title: "Some Page",
});

const { data: upcomingEvents, error } = await useEvents({
  filters: { end_at: { $gt: today() } },
});
const { lang } = useLang();
</script>
<template>
  <ErrorCard v-if="error" />
  <Stack v-else class="grid p-3 md:p-5 lg:grid-cols-[1fr_3fr]">
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
