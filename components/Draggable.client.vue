<script setup lang="ts">
import { useDraggable } from "@vueuse/core";

type Props = {
  x: number;
  y: number;
  isFront?: boolean;
};
const { x, y, isFront = false } = defineProps<Props>();
const emit = defineEmits(["startDrag"]);
const draggable = ref<HTMLElement | null>(null);

const { style, isDragging } = useDraggable(draggable, {
  initialValue: { x, y },
  onStart: () => emit("startDrag"),
});
</script>

<template>
  <div
    ref="draggable"
    :style="style"
    class="z-10 w-full cursor-grab touch-none select-none overflow-hidden rounded border border-gray-700 bg-black/80 backdrop-blur-lg transition-colors md:fixed md:w-fit md:border-gray-500 md:hover:border-gray-400"
    :class="[
      isDragging ? 'z-40 cursor-grabbing !border-gray-100' : '',
      isFront ? 'z-40' : '',
    ]"
  >
    <slot />
  </div>
</template>
