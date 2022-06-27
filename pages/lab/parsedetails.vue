<script setup lang="ts">
const { data: projects } = await useProjects();
const { data: events } = await useEvents();
</script>
<template>
  <Stack class="p-4 md:p-6">
    <div class="grid gap-4 md:grid-cols-3">
      <template v-for="project in projects">
        <div class="overflow-auto whitespace-pre-wrap font-mono">
          {{ project.details }}
        </div>
        <div class="overflow-auto whitespace-pre-wrap font-mono">
          {{ parseDetails(project.details) }}
        </div>
        <Details :details="parseDetails(project.details)" />
      </template>
      <template v-for="event in events.filter((e) => e.details)">
        <div class="overflow-auto whitespace-pre-wrap font-mono">
          {{ event.details }}
        </div>
        <div class="overflow-auto whitespace-pre-wrap font-mono">
          {{ parseDetails(event.details) }}
        </div>
        <Details :details="parseDetails(event.details)" />
      </template>
    </div>
  </Stack>
</template>
