<script setup lang="ts">
definePageMeta({
  labTitle: "Details",
  labIntro: "Details data acting up? Help is here",
  labGroup: "Tools",
});

const { data: projects } = await useProjects();
const debug = ref(false);
const input = ref("hello: world");
</script>
<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">Lab</Button>
    <Title>Details</Title>
    <Button @click="debug = !debug">Toggle debug</Button>
    <div class="grid gap-16 md:grid-cols-3">
      <Title medium>Input data</Title>
      <Title medium>Parsed data</Title>
      <Title medium>Output data</Title>
      <Textarea v-model="input" class="text-sm" />
      <div class="overflow-auto whitespace-pre-wrap font-mono">
        {{ parseDetails(input) }}
      </div>
      <Details :details="parseDetails(input)" :class="[debug ? 'debug' : '']" />
      <template v-for="project in projects">
        <div>
          <Code>
            {{ project.details }}
          </Code>
          <Button small right :to="project.projectLink">Visit project</Button>
        </div>
        <Code>
          {{ parseDetails(project.details) }}
        </Code>
        <Details
          :details="parseDetails(project.details)"
          :class="[debug ? 'debug' : '']"
        />
      </template>
    </div>
  </Stack>
</template>
