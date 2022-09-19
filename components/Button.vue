<script setup lang="ts">
import IconArrowUp from "~icons/radix-icons/arrow-up";
import IconArrowRight from "~icons/radix-icons/arrow-right";
import IconArrowDown from "~icons/radix-icons/arrow-down";
import IconArrowLeft from "~icons/radix-icons/arrow-left";
type Props = {
  primary?: boolean;
  up?: boolean;
  right?: boolean;
  down?: boolean;
  left?: boolean;
};
const { primary = false } = defineProps<Props>();
</script>

<template>
  <button
    class="inline-flex h-7 items-center gap-1 rounded border border-gray-50 bg-black/90 px-2 font-mono text-sm uppercase text-gray-300 transition-colors hover:bg-gray-800 disabled:pointer-events-none disabled:opacity-20"
    :class="[
      primary
        ? 'border-green-400 bg-green-400 !text-[black] hover:border-green-500 hover:bg-green-500'
        : '',
    ]"
  >
    <IconArrowLeft v-if="left" />
    <IconArrowDown v-if="down" />
    <IconArrowUp v-if="up" />
    <div class="translate-y-[0.05rem]"><slot /></div>
    <IconArrowRight v-if="right" />
  </button>
</template>
