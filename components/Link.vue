<script setup lang="ts">
import IconArrowUp from "~icons/radix-icons/arrow-up";
import IconArrowRight from "~icons/radix-icons/arrow-right";
import IconArrowDown from "~icons/radix-icons/arrow-down";
import IconArrowLeft from "~icons/radix-icons/arrow-left";
type Props = {
  to?: string;
  up?: boolean;
  right?: boolean;
  down?: boolean;
  left?: boolean;
};
const { to, left, right } = defineProps<Props>();
</script>

<template>
  <NuxtLink
    :to="to"
    class="flex gap-1 font-mono text-xs uppercase text-gray-300 transition-colors hover:text-gray-500"
  >
    <IconArrowLeft v-if="left" />
    <IconArrowDown v-if="down" />
    <IconArrowUp v-if="up" />
    <div><slot /></div>
    <IconArrowRight v-if="right" />
  </NuxtLink>
</template>
