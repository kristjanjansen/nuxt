<script setup lang="ts">
import { useDraggable } from "@vueuse/core";

const useDraggables = (initialDraggables: any) => {
  const makeDraggable = (initialDraggable: any) => {
    const front = false;
    const docked = initialDraggable.docked || false;
    return { ...initialDraggable, front, docked };
  };

  let draggables = reactive(
    Object.fromEntries(
      Object.entries(initialDraggables).map(([key, draggable]) => [
        key,
        {
          ...makeDraggable(draggable),
          toggleFront: () => {
            Object.keys(draggables).forEach(
              (k) => (draggables[k].front = false)
            );
            draggables[key].front = true;
          },
          toggleDock: () => {
            draggables[key].docked = !draggables[key].docked;
            draggables[key].toggleFront();
          },
        },
      ])
    )
  );

  return draggables;
};
const d = useDraggables({
  first: { x: 300, y: 300, docked: true },
  second: { x: 400, y: 400 },
});

const draggable1 = ref<HTMLElement | null>(null);
const { style: style1, isDragging: isDragging1 } = useDraggable(draggable1, {
  initialValue: { x: d.first.x, y: d.first.y },
  onStart: d.first.toggleFront,
});

const draggable2 = ref<HTMLElement | null>(null);
const { style: style2, isDragging: isDragging2 } = useDraggable(draggable2, {
  initialValue: { x: d.second.x, y: d.second.y },
  onStart: d.second.toggleFront,
});
</script>

<template>
  <div class="p-4 md:p-6">
    <pre>{{ d.first }}</pre>
    <div class="flex">
      <div v-for="(dock, key) in d" class="border p-4">
        {{ key }} / {{ dock.docked }}
        <Button v-if="dock.docked" @click="d[key].toggleDock">Undock</Button>
      </div>
    </div>
    <div
      ref="draggable1"
      class="z-10 w-full cursor-grab touch-none select-none overflow-hidden rounded border border-gray-700 bg-black/80 p-16 backdrop-blur-lg transition-colors md:fixed md:w-fit md:border-gray-500 md:hover:border-gray-400"
      :class="[
        isDragging1 ? 'z-40 cursor-grabbing !border-gray-100' : '',
        d.first.front ? 'z-40' : '',
        d.first.docked ? 'opacity-10' : '',
      ]"
      :style="style1"
    >
      <Stack>
        <div>First front {{ d.first.front }}</div>
        <div>docked {{ d.first.docked }}</div>
        <Button @click="d.first.toggleDock"> Dock </Button>
      </Stack>
    </div>
    <div
      ref="draggable2"
      class="z-10 w-full cursor-grab touch-none select-none overflow-hidden rounded border border-gray-700 bg-black/80 p-16 backdrop-blur-lg transition-colors md:fixed md:w-fit md:border-gray-500 md:hover:border-gray-400"
      :class="[
        isDragging2 ? 'z-40 cursor-grabbing !border-gray-100' : '',
        d.second.front ? 'z-40' : '',
        d.second.docked ? 'opacity-20' : '',
      ]"
      :style="style2"
    >
      <Stack>
        <div>Second front {{ d.second.front }}</div>
        <div>dock {{ d.second.docked }}</div>
        <Button v-if="!d.second.docked" @click="d.second.toggleDock"
          >Dock</Button
        >
      </Stack>
    </div>
  </div>
</template>
