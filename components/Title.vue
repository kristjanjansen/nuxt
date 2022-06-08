<script setup lang="ts">
type Props = {
  medium?: boolean;
  small?: boolean;
};
const { medium = false, small = false } = defineProps<Props>();
</script>

<template>
  <h2
    class="break-words font-normal text-gray-400 font-title text-3xl leading-9"
    :class="[medium ? '!text-xl' : '', small ? '!text-lg' : '']"
    v-html="$slots.default()[0].children"
  />
</template>

<style>
h2 a {
  @apply underline;
}
h2 em {
  @apply font-normal not-italic text-gray-300;
}
h2 strong {
  @apply font-normal text-gray-200;
}
</style>
