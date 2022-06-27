<script setup lang="ts">
const { data: projects } = await useProjects();
const { data: events } = await useEvents();
</script>
<template>
  <Stack class="p-4 md:p-6">
    <div class="grid grid-cols-2 gap-4">
      <template v-for="project in projects">
        <div class="whitespace-pre-wrap font-mono">{{ project.details }}</div>
        <div class="whitespace-pre-wrap font-mono">
          {{ parseDetails(project.details) }}
        </div>
      </template>
      <template v-for="event in events.filter((e) => e.details)">
        <div class="whitespace-pre-wrap font-mono">{{ event.details }}</div>
        <div class="whitespace-pre-wrap font-mono">
          {{ parseDetails(event.details) }}
        </div>
      </template>
    </div>
  </Stack>
</template>
