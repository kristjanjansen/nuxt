<script setup lang="ts">
const sample = `First data: Hello world
Second data: babba
More data: Hello world
Even more data: babba`;

const data = ref(sample);
const parsedData = computed(() => Object.fromEntries(parseDetails(data.value)));
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">lab</Button>
    <Title>Parse data</Title>
    <Textarea v-model="data" class="h-48 text-sm" />
    <Data :data="parsedData" class="w-96" />
    <Data :data="parsedData" />
  </Stack>
</template>
