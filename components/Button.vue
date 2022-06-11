<script setup lang="ts">
type Props = {
  primary?: boolean;
};
const { primary = false } = defineProps<Props>();
</script>

<template>
  <button
    class="inline-flex h-6 gap-1 rounded border px-2 font-mono text-sm uppercase transition-colors hover:bg-gray-800"
    :class="[
      primary
        ? 'border-green-500 bg-green-500 text-black hover:border-green-600 hover:bg-green-600'
        : '',
    ]"
  >
    <div class="translate-y-[0.1rem]"><slot /></div>
  </button>
</template>
