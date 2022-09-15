<script setup lang="ts">
import { stringToNumbers, numbersToCoords } from "~~/composables/coords";
const input = ref("a");
// const average = (arr: number[]) =>
//   Math.floor(arr.reduce((a, b) => a + b, 0) / arr.length);

// const stringToNumbers = (str: string) => [...str].map((s) => s.codePointAt(0));

// const numberToRandom = (numbers: number[]) => {
//   const half = Math.ceil(numbers.length / 2);
//   const x = Math.floor(average(numbers.slice(0, half)));
//   const y = Math.floor(average(numbers.slice(-half)));
//   return [seed[x % 1000], seed[y % 1000]];
// };

// const numbersToCoords = (numbers) => {
//   if (numbers.length === 1) {
//     const half = Math.ceil(numbers[0] / 2);
//     return numberToRandom([numbers[0], half]);
//   }
//   return numberToRandom(numbers);
// };

const output = computed(() => stringToCoords(input.value, 100, 100));
</script>
<template>
  <Stack class="p-4 md:p-6">
    <Link left to="/lab">Lab</Link>
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
      <div class="debug">
        <svg width="300" height="300">
          <circle r="3" fill="white" :cx="output[0]" :cy="output[1]" />
          <text fill="white" :x="output[0]" :y="output[1]">{{ input }}</text>
        </svg>
      </div>
    </div>
  </Stack>
</template>
