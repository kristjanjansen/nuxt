<script setup lang="ts">
// Get the events that happen in the future

const { data: futureEvents } = await useEvents({
  filters: { start_at: { $gte: new Date() } },
});

const { data: pastEvents } = await useEvents({
  filters: { start_at: { $lt: new Date() } },
});
</script>

<template>
  <div>
    <pre>
    {{ futureEvents.map((e) => e.start_at) }}
    </pre>
    <pre>
    {{ pastEvents.map((e) => e.start_at) }}
   </pre
    >
  </div>
</template>
