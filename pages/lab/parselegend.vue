<script setup lang="ts">
import columnify from "columnify";

const sample = JSON.stringify(
  {
    "First data": 100,
    "Second data": "Hello",
    "Super weird wei.... data": "Hello",
  },
  null,
  2
);
const data = ref(sample);
const parsedData = computed(() => JSON.parse(data.value));

const a = columnify(parsedData.value, {
  showHeaders: false,
  dataTransform: (d) => `<Code class="odd:text-gray-600">${d}</Code>`,
});

console.log(a);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Title>Page legend</Title>
    <div class="grid grid-cols-[auto_1fr] gap-x-4" v-html="a" />
    <div class="grid h-32 gap-8 md:grid-cols-2">
      <Textarea v-model="data" />
      <div class="debug2 gap-4 lg:flex">
        <div
          v-for="[key, value] in Object.entries(parsedData)"
          class="flex gap-2"
        >
          <Code class="w-[15ch] !text-gray-600 lg:w-auto">{{ key }}</Code>
          <Code>{{ value }}</Code>
        </div>
      </div>
    </div>
  </Stack>
</template>
