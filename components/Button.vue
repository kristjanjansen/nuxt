<script setup lang="ts">
type Props = {
  primary?: boolean;
};
const { primary = false } = defineProps<Props>();
</script>

<template>
  <button
    class="inline-flex h-7 gap-1 rounded border border-gray-50 bg-black/90 px-3 font-mono text-sm uppercase text-gray-300 transition-colors hover:bg-gray-800 disabled:pointer-events-none disabled:opacity-20"
    :class="[
      primary
        ? 'border-green-400 bg-green-400  !text-green-900 hover:border-green-500 hover:bg-green-500'
        : '',
    ]"
  >
    <div class="flex translate-y-[0.25rem] gap-2"><slot /></div>
  </button>
</template>
