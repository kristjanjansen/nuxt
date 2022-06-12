<script setup lang="ts">
type Props = {
  medium?: boolean;
  small?: boolean;
};
const { medium = false, small = false } = defineProps<Props>();
</script>

<template>
  <h2
    class="break-words font-title text-2xl font-normal leading-9 text-gray-300 md:text-3xl"
    :class="[medium ? '!md:text-2xl !text-xl' : '', small ? '!text-lg' : '']"
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
