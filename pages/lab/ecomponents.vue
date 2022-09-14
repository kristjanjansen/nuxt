<script setup>
const a = ref(50);

const colors = [
  ["-", "", "rgb(var(--gray-50))"],
  ["var(--gray-100)", "#f2f2f2", "rgb(var(--gray-100))"],
  ["var(--gray-200)", "#e0e0e0", "rgb(var(--gray-200))"],
  ["var(--gray-300)", "#9d9d9d", "rgb(var(--gray-300))"],
  ["var(--gray-400)", "#828282", "rgb(var(--gray-400))"],
  ["var(--gray-500)", "#454545", "rgb(var(--gray-500))"],
  ["var(--gray-600)", "#333333", "rgb(var(--gray-600))"],
  ["var(--gray-700)", "#121212", "rgb(var(--gray-700))"],
  ["-", "", "rgb(var(--gray-800))"],
  ["-", "", "rgb(var(--gray-900))"],
];
</script>
<template>
  <div class="EComponents">
    Hello
    <!-- <EFormRange v-model="a" label="EFormRange" /> -->
    <div>V3 and V4 colors</div>
    <div v-for="[thenName, thenColor, nowColor] in colors" class="swatches">
      <div class="swatch" :style="{ background: thenColor }">
        {{ thenName }}
      </div>
      <div class="swatch" :style="{ background: nowColor }">{{ nowColor }}</div>
    </div>
  </div>
</template>

<style scoped>
.EComponents {
  padding: 32px;
}
@media only screen and (min-width: 600px) {
  .EComponents {
    padding: var(--p-6);
  }
}
.swatches {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.swatch {
  display: grid;
  place-content: center;
  height: var(--h-12);
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
}
</style>
