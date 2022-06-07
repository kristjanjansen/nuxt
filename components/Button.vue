<script setup lang="ts">
type Props = {
  primary?: boolean;
};
const { primary = false } = defineProps<Props>();
</script>

<template>
  <button
    class="inline-flex gap-1 rounded-lg border-2 pt-1 pr-3 pb-1 pl-3 uppercase transition-colors font-mono font-title text-base hover:bg-gray-900"
    :class="[
      primary
        ? 'border-green-500 bg-green-500 text-green-900 hover:border-green-600 hover:bg-green-600'
        : '',
    ]"
  >
    <slot />
  </button>
</template>
