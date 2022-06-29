<script setup lang="ts">
type Props = {
  draggables: any;
};
const { draggables } = defineProps<Props>();
</script>

<template>
  <div class="block h-2 md:hidden" />
  <div class="fixed bottom-0 left-4 z-[100] flex">
    <button
      v-for="(draggable, key) in draggables"
      @click="draggable.setDocked"
      class="flex h-7 items-center border-t border-r border-gray-600 bg-black/50 px-3 font-mono text-sm uppercase text-gray-400 transition first:border-l hover:bg-black/30"
      :class="draggable.getDocked() ? '!bg-gray-500/50 !text-gray-200' : ''"
    >
      {{ key }}
    </button>
  </div>
</template>
