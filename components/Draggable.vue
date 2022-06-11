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
    class="fixed z-10 w-fit cursor-grab touch-none select-none overflow-hidden rounded border border-white"
    :class="[isDragging ? 'z-40 cursor-grabbing' : '', isFront ? 'z-40' : '']"
  >
    <slot />
  </div>
</template>
