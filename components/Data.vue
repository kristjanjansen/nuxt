<script setup lang="ts">
import { useElementSize } from "@vueuse/core";

type Props = {
  data: any;
};
const { data } = defineProps<Props>();

const el = ref(null);
const { width } = useElementSize(el);
const isWide = computed(() => width.value > 1000);
const classes = "whitespace-pre font-mono text-sm text-gray-400";
const formattedData = computed(() =>
  Object.entries(data)
    .map(
      ([key, value]) =>
        `<div class="${classes} text-gray-600">${key}</div><div class="${classes} ${
          isWide ? "pr-4" : ""
        }">${value}</div>`
    )
    .join("")
);
</script>

<template>
  <div
    ref="el"
    v-html="formattedData"
    class="grid-cols-[auto_1fr]"
    :class="[isWide ? 'flex flex-wrap gap-x-2' : 'grid gap-x-3']"
  />
</template>
