<script setup lang="ts">
const { data: projects } = await useProjects();
const debug = ref(false);
const input = ref("hello: world");
</script>
<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">lab</Button>
    <Title>Parsing details</Title>
    <Button @click="debug = !debug">Toggle debug</Button>
    <div class="grid gap-16 text-grey-500 md:grid-cols-3">
      <Title small>Input data</Title>
      <Title small>Parsed data</Title>
      <Title small>Output data</Title><Textarea v-model="input" />
      <div class="overflow-auto whitespace-pre-wrap font-mono">
        {{ parseDetails(input) }}
      </div>
      <Details :details="parseDetails(input)" :class="[debug ? 'debug' : '']" />
      <template v-for="project in projects">
        <div>
          <div class="overflow-auto whitespace-pre-wrap font-mono">
            {{ project.details }}
          </div>
          <Button small right :to="project.projectLink">Visit project</Button>
        </div>
        <div class="overflow-auto whitespace-pre-wrap font-mono">
          {{ parseDetails(project.details) }}
        </div>
        <Details
          :details="parseDetails(project.details)"
          :class="[debug ? 'debug' : '']"
        />
      </template>
    </div>
  </Stack>
</template>
