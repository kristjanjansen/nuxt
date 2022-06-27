<script setup lang="ts">
import { useDraggable } from "@vueuse/core";
import IconDock from "~icons/radix-icons/chevron-down";

type Props = {
  x: number;
  y: number;
  front?: boolean;
  docked?: boolean;
  dockable?: boolean;
  toggleFront: Function;
  toggleDock: Function;
};
const {
  x,
  y,
  front = false,
  docked = false,
  dockable = true,
} = defineProps<Props>();
const emit = defineEmits(["toggleFront", "toggleDock"]);
const draggable = ref<HTMLElement | null>(null);

const { style, isDragging } = useDraggable(draggable, {
  initialValue: { x, y },
  onStart: () => emit("toggleFront"),
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
        front ? 'z-40' : '',
      ]"
    >
      <div class="relative">
        <button
          v-if="dockable"
          class="absolute top-0 right-0 z-50 p-2 text-gray-500 hover:text-gray-100 focus:z-50"
          @click="emit('toggleDock')"
        >
          <IconDock />
        </button>
        <slot />
      </div>
    </div>
  </Fade>
</template>
