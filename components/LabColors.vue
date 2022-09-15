<script setup>
const colors = [
  ["var(--accent)", "#7bef87", "rgb(var(--green-400))"],
  ["var(--fg)", "#ffffff", "rgb(var(--white))"],
  ["N/A", "", "rgb(var(--gray-50))"],
  ["var(--gray-100)", "#f2f2f2", "rgb(var(--gray-100))"],
  ["var(--gray-200)", "#e0e0e0", "rgb(var(--gray-200))"],
  ["var(--gray-300)", "#9d9d9d", "rgb(var(--gray-300))"],
  ["var(--gray-400)", "#828282", "rgb(var(--gray-400))"],
  ["var(--gray-500)", "#454545", "rgb(var(--gray-500))"],
  ["var(--gray-600)", "#333333", "rgb(var(--gray-600))"],
  ["var(--gray-700)", "#121212", "rgb(var(--gray-700))"],
  ["N/A", "", "rgb(var(--gray-800))"],
  ["N/A", "", "rgb(var(--gray-900))"],
  ["var(--bg)", "#000000", "rgb(var(--black))"],
];
</script>
<template>
  <div>
    <div
      v-for="[thenName, thenColor, nowColor, nowName] in colors"
      class="grid grid-cols-2"
    >
      <div :style="{ background: thenColor }" class="relative h-20">
        <div
          class="absolute top-0 left-0 bg-[black] px-2 font-mono text-sm text-[white]"
        >
          {{ thenName }}
        </div>
      </div>
      <div :style="{ background: nowColor }" class="relative h-20">
        <div
          class="absolute top-0 left-0 bg-[black] px-2 font-mono text-sm text-[white]"
        >
          {{ nowName || nowColor }}
        </div>
      </div>
    </div>
  </div>
</template>
