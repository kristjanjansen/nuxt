<script setup lang="ts">
import { useDraggable } from "@vueuse/core";

const useDraggables = (initialDraggables: any) => {
  const makeDraggable = (initialDraggable: any) => {
    // const draggable = ref<HTMLElement | null>(null);
    // const { style, isDragging } = useDraggable(draggable, {
    //   initialValue: { x: initialDraggable.x, y: initialDraggable.y },
    //   onStart: () => {},
    // });
    const front = ref(0);
    const onStart = () => {
      front.value = Math.random();
    };
    const d = { ...initialDraggable, front, onStart };
    return d;
  };

  let draggables = Object.fromEntries(
    Object.entries(initialDraggables).map(([key, draggable]) => [
      key,
      {
        ...makeDraggable(draggable),
        onStart: () => {
          Object.keys(draggables).forEach((k) => (draggables[k].front = false));
          draggables[key].front = true;
        },
      },
    ])
  );

  return draggables;
};
const { first, second } = useDraggables({
  first: { x: 300, y: 300 },
  second: { x: 400, y: 400 },
});

const draggable1 = ref<HTMLElement | null>(null);
const { style: style1, isDragging: isDragging1 } = useDraggable(draggable1, {
  initialValue: { x: first.x, y: first.y },
  onStart: first.onStart,
});

const draggable2 = ref<HTMLElement | null>(null);
const { style: style2, isDragging: isDragging2 } = useDraggable(draggable2, {
  initialValue: { x: second.x, y: second.y },
  onStart: second.onStart,
});
</script>

<template>
  <div class="p-4 md:p-6">
    <pre>{{ first }}</pre>
    <pre>{{ second }}</pre>
    <div
      ref="draggable1"
      class="z-10 w-full cursor-grab touch-none select-none overflow-hidden rounded border border-gray-700 bg-black/80 p-16 backdrop-blur-lg transition-colors md:fixed md:w-fit md:border-gray-500 md:hover:border-gray-400"
      :class="[
        isDragging1 ? 'z-40 cursor-grabbing !border-gray-100' : '',
        first.front ? 'z-40' : '',
      ]"
      :style="style1"
    >
      Hello {{ first.front }}
    </div>
    <div
      ref="draggable2"
      class="z-10 w-full cursor-grab touch-none select-none overflow-hidden rounded border border-gray-700 bg-black/80 p-16 backdrop-blur-lg transition-colors md:fixed md:w-fit md:border-gray-500 md:hover:border-gray-400"
      :class="[
        isDragging2 ? 'z-40 cursor-grabbing !border-gray-100' : '',
        second.front ? 'z-40' : '',
      ]"
      :style="style2"
    >
      Hello {{ second.front }}
    </div>
  </div>
</template>
