<script setup lang="ts">
import IconArrowLeft from "~icons/radix-icons/arrow-left";
type Props = {
  to: string;
};
const { to } = defineProps<Props>();
</script>

<template>
  <NuxtLink
    :to="to"
    class="flex gap-1 uppercase text-gray-300 transition-colors font-mono text-xs hover:text-gray-500"
  >
    <IconArrowLeft />
    <div><slot /></div>
  </NuxtLink>
</template>
