<script setup lang="ts">
type Props = {
  medium?: boolean;
  small?: boolean;
};
const { medium = false, small = false } = defineProps<Props>();
</script>

<template>
  <h2
    class="break-words font-normal text-gray-300 font-title text-3xl leading-7"
    :class="[medium ? '!text-xl' : '', small ? '!text-lg' : '']"
    v-html="$slots.default()[0].children"
  />
</template>
