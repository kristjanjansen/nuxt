<script setup lang="ts">
type Props = {
  primary?: boolean;
};
const { primary = false } = defineProps<Props>();
</script>

<template>
  <button
    class="inline-flex gap-1 rounded-lg border-2 px-3 py-1 uppercase transition-colors font-title text-base hover:brightness-90"
    :class="[primary ? 'border-green-500 bg-green-500 text-green-900' : '']"
  >
    <slot />
  </button>
</template>
