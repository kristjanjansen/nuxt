<script setup lang="ts">
const input = ref("a");
const average = (arr: number[]) =>
  Math.floor(arr.reduce((a, b) => a + b, 0) / arr.length);

const stringToNumbers = (str: string) => [...str].map((s) => s.codePointAt(0));

const numberToRandom = (numbers: number[]) => {
  const half = Math.ceil(numbers.length / 2);
  const x = Math.floor(average(numbers.slice(0, half)));
  const y = Math.floor(average(numbers.slice(-half)));
  return [seed[x % 1000], seed[y % 1000]];
};

const numbersToCoords = (numbers) => {
  if (numbers.length === 1) {
    const half = Math.ceil(numbers[0] / 2);
    return numberToRandom([numbers[0], half]);
  }
  return numberToRandom(numbers);
};

const output = computed(() =>
  numbersToCoords(stringToNumbers(input.value)).map((c) => Math.floor(c * 300))
);
</script>
<template>
  <Stack class="grid grid-cols-3 p-4 md:p-6">
    <Textarea v-model="input" class="h-64" />
    <div>
      <div>{{ stringToNumbers(input) }}</div>
      <div>{{ numbersToCoords(stringToNumbers(input)) }}</div>
      <div>{{ output }}</div>
    </div>
    <div class="debug">
      <svg width="300" height="300">
        <circle r="3" fill="white" :cx="output[0]" :cy="output[1]" />
        <text fill="white" :x="output[0]" :y="output[1]">{{ input }}</text>
      </svg>
    </div>
  </Stack>
</template>
