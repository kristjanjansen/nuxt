<script setup lang="ts">
type Props = {
  details: string[][];
};
const { details = [] } = defineProps<Props>();
</script>

<template>
  <div
    class="Details grid auto-rows-min gap-1 font-sans2 text-sm tracking-wide md:grid-cols-[1fr_2fr] md:gap-4"
  >
    <template v-for="detail in details">
      <div class="text-gray-600" :class="[!detail[1] ? 'col-span-2' : '']">
        <span v-html="detail[0] || ''" />
      </div>
      <div class="text-gray-400" v-if="detail[1]" v-html="detail[1]" />
    </template>
  </div>
</template>

<style>
.Details a {
  @apply break-all underline  decoration-1 underline-offset-2;
}
</style>
