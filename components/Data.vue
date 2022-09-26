<script setup lang="ts">
import { useElementSize } from "@vueuse/core";
import columnify from "columnify";

type Props = {
  data: object;
};
const { data } = defineProps<Props>();

const el = ref(null);
const { width } = useElementSize(el);
const isWide = computed(() => width.value > 1000);

const formattedData = computed(() =>
  columnify(data, {
    showHeaders: false,
    dataTransform: (d) =>
      `<Code class="whitespace-pre font-mono text-sm text-gray-400">${d}</Code>`,
  })
);
</script>

<template>
  <div
    ref="el"
    v-html="formattedData"
    class="grid-cols-[auto_1fr] odd:[&>*]:text-gray-600"
    :class="[
      isWide ? 'flex flex-wrap gap-x-2 even:[&>*]:pr-4' : 'grid gap-x-3',
    ]"
  />
</template>
