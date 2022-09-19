<script setup lang="ts">
import { stringToNumbers } from "~~/composables/coords";

const input = ref("a");
const output = computed(() => stringToCoords(input.value, 100, 100));
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small Link left to="/lab">Lab</Button>
    <Title>Text to coordinates</Title>
    <div class="grid w-full gap-8 md:grid-cols-4">
      <Textarea v-model="input" class="h-64" />
      <div>
        <Title medium>String to numbers</Title>
        <pre>{{ stringToNumbers(input) }}</pre>
      </div>
      <div>
        <Title medium>Numbers to coordinates</Title>
        <pre>{{ output }}</pre>
      </div>
      <svg width="300" height="300" class="border border-white">
        <circle r="3" fill="white" :cx="output[0]" :cy="output[1]" />
        <text fill="white" :x="output[0]" :y="output[1]">{{ input }}</text>
      </svg>
    </div>
  </Stack>
</template>
