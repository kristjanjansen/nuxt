<script setup lang="ts">
type Props = {
  medium?: boolean;
  small?: boolean;
};
const { medium = false, small = false } = defineProps<Props>();
</script>

<template>
  <h2
    class="break-words font-title text-3xl font-normal leading-9 text-gray-300"
    :class="[
      medium ? '!md:text-2xl !text-xl leading-8' : '',
      small ? '!text-base !leading-6' : '',
    ]"
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
