<script setup lang="ts">
const { data: projects } = await useProjects();
const { data: events } = await useEvents();
const debug = ref(false);
</script>
<template>
  <Stack class="p-4 md:p-6">
    <Link left to="/lab">lab</Link>
    <Title>Parsing details</Title>
    <Button @click="debug = !debug">Toggle debug</Button>
    <div class="grid gap-4 text-gray-500 md:grid-cols-3">
      <Title small>Input data</Title>
      <Title small>Parsed data</Title>
      <Title small>Output data</Title>
      <template v-for="project in projects">
        <div class="overflow-auto whitespace-pre-wrap font-mono">
          {{ project.details }}
        </div>
        <div class="overflow-auto whitespace-pre-wrap font-mono">
          {{ parseDetails(project.details) }}
        </div>
        <Details
          :details="parseDetails(project.details)"
          :class="[debug ? 'debug' : '']"
        />
      </template>
      <template v-for="event in events.filter((e) => e.details)">
        <div class="overflow-auto whitespace-pre-wrap font-mono">
          {{ event.details }}
        </div>
        <div class="overflow-auto whitespace-pre-wrap font-mono">
          {{ parseDetails(event.details) }}
        </div>
        <Details
          :details="parseDetails(event.details)"
          :class="[debug ? 'debug' : '']"
        />
      </template>
    </div>
  </Stack>
</template>
