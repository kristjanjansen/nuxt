<script setup lang="ts">
import { useDraggable } from "@vueuse/core";
import IconDock from "~icons/radix-icons/chevron-down";

type Props = {
  x: number;
  y: number;
  isFront?: boolean;
  dockable?: boolean;
  docked?: boolean;
};
const {
  x,
  y,
  isFront = false,
  dockable = false,
  docked = false,
} = defineProps<Props>();
const emit = defineEmits(["startDrag", "dock"]);
const draggable = ref<HTMLElement | null>(null);

const { style, isDragging } = useDraggable(draggable, {
  initialValue: { x, y },
  onStart: () => emit("startDrag"),
});
</script>

<template>
  <Fade>
    <div
      v-if="!docked"
      ref="draggable"
      :style="style"
      class="z-10 w-full cursor-grab touch-none select-none overflow-hidden rounded border border-gray-700 bg-black/80 backdrop-blur-lg transition-colors md:fixed md:w-fit md:border-gray-500 md:hover:border-gray-400"
      :class="[
        isDragging ? 'z-40 cursor-grabbing !border-gray-100' : '',
        isFront ? 'z-40' : '',
      ]"
    >
      <div class="relative">
        <button
          v-if="dockable"
          class="absolute top-0 right-0 z-40 p-2 text-gray-500 hover:text-gray-100 focus:z-50"
          @click="emit('dock')"
        >
          <IconDock />
        </button>
        <slot />
      </div>
    </div>
  </Fade>
</template>
