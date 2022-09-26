<script setup lang="ts">
const sample = JSON.stringify(
  {
    "First data": 100,
    "Second data": "Hello",
    "Super weird wei.... data": "Hello",
    "First datda": 100,
    "Second dadta": "Hello",
    "Super wedird wei.... data": "Hello",
  },
  null,
  2
);
const data = ref(sample);
const parsedData = computed(() => JSON.parse(data.value));
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">lab</Button>
    <Title>Parse data</Title>
    <Textarea v-model="data" />
    <Data :data="parsedData" class="w-64" />
    <Data :data="parsedData" />
  </Stack>
</template>
