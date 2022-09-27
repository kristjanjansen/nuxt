<script setup lang="ts">
import { stringToNumbers } from "~~/composables/coords";

definePageMeta({
  labTitle: "String to coordinates",
  labIntro: "Assign unique XY coordinates to a text",
  labGroup: "",
});

const input = ref("abc");
const output = computed(() => stringToCoords(input.value, 100, 100));
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small Link left to="/lab">Lab</Button>
    <Title>String to coordinates</Title>
    <div class="grid w-full gap-8 md:grid-cols-4">
      <Textarea v-model="input" class="h-64" />
      <div>
        <Title medium>String to numbers</Title>
        <Code>{{ stringToNumbers(input) }}</Code>
      </div>
      <div>
        <Title medium>Numbers to coordinates</Title>
        <Code>{{ output }}</Code>
      </div>
      <svg width="300" height="300" class="border border-white">
        <circle r="3" fill="white" :cx="output[0]" :cy="output[1]" />
        <text fill="white" :x="output[0]" :y="output[1]">{{ input }}</text>
      </svg>
    </div>
  </Stack>
</template>
