<script setup lang="ts">
import IconArrowLeft from "~icons/radix-icons/arrow-left";
import IconArrowRight from "~icons/radix-icons/arrow-right";
type Props = {
  to: string;
  left?: boolean;
  right?: boolean;
};
const { to, left, right } = defineProps<Props>();
</script>

<template>
  <NuxtLink
    :to="to"
    class="flex gap-1 uppercase text-gray-300 transition-colors font-mono text-xs hover:text-gray-500"
  >
    <IconArrowLeft v-if="left" />
    <div><slot /></div>
    <IconArrowRight v-if="right" />
  </NuxtLink>
</template>
