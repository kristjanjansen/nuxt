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
    class="flex gap-1 uppercase text-gray-300 font-mono text-xs"
  >
    <IconArrowLeft />
    <div><slot /></div>
  </NuxtLink>
</template>
