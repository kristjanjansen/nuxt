<script setup lang="ts">
type Props = {
  details: string;
};
const { details = "" } = defineProps<Props>();
</script>

<template>
  <div
    class="Details font-sans2 tracking-wider text-gray-300"
    v-html="parseDetails(details)"
  />
</template>

<style>
.Details p {
  @apply mb-2 last:mb-0;
}
.Details strong {
  @apply text-gray-500;
}
</style>
