<script setup lang="ts">
type Props = {
  details: string[][];
};
const { details = [] } = defineProps<Props>();
</script>

<template>
  <div class="Details grid auto-rows-min gap-2 md:grid-cols-[1fr_2fr]">
    <template v-for="detail in details">
      <div class="text-gray-500" :class="[!detail[1] ? 'col-span-2' : '']">
        {{ detail[0] }}{{ detail[0] && detail[1] ? ":" : "" }}
      </div>
      <div class="text-gray-200" v-if="detail[1]" v-html="detail[1]" />
    </template>
  </div>
</template>

<style>
.Details a {
  @apply underline decoration-1  underline-offset-2;
}
</style>
