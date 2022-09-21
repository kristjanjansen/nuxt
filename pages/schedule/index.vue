<script setup lang="ts">
definePageMeta({
  layout: "elayout",
});

const { data: upcomingEvents, error } = await useEvents({
  filters: { end_at: { $gt: today() } },
});
const { lang } = useLang();
</script>

<template>
  <ErrorCard v-if="error" />
  <main v-else class="Page Schedule">
    <template v-for="event in upcomingEvents">
      <EBox>
        <EventCard
          layout="horizontal"
          :project-thumbnail="event.thumbnail"
          :event="event"
        />
      </EBox>
    </template>
  </main>
</template>

<style scoped>
.Page.Schedule {
  display: grid;
  grid-template-columns: 1fr;
  padding: var(--p-4);
}
.Page.Schedule > section {
  margin-bottom: var(--m-12);
}
.projectTitle {
  margin-bottom: var(--m-6);
}
.EscheduleEvent a {
  color: var(--gray-300);
}
.EscheduleEvent a:hover {
  color: var(--fg);
}
.Page.Schedule > * {
  margin-bottom: var(--m-8);
}
/* @TODO: Add breakpoints system */
@media only screen and (min-width: 600px) {
  .Page.Schedule > * {
    grid-column: 4 / -1;
    margin-bottom: var(--m-16);
  }
}
@media only screen and (min-width: 1000px) {
  .Page.Schedule {
    grid-template-columns: repeat(8, 1fr);
  }
  .Page.Schedule > * {
    grid-column: 4 / -1;
  }
}
</style>
