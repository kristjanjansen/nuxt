<script setup lang="ts">
import { useDraggable } from "@vueuse/core";

const useDraggables = (initialDraggables: any) => {
  const keys = Object.keys(initialDraggables);
  let draggables = keys.map((key) => {
    const front = ref(false);
    const docked = ref(initialDraggables[key].docked || false);
    return { ...initialDraggables[key], front, docked };
  });
  draggables = draggables.map((draggable) => {
    draggable.toggleFront = () => {
      Object.keys(draggables).forEach(
        (k) => (draggables[k].front.value = false)
      );
      draggable.front.value = true;
    };
    draggable.toggleDocked = () => {
      draggable.docked.value = !draggable.docked.value;
      draggable.toggleFront();
    };
    return draggable;
  });
  return Object.fromEntries(keys.map((key, i) => [key, draggables[i]]));
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
    <pre>{{ d }}</pre>
    <div class="fixed bottom-0 left-4 flex">
      <div v-for="(dock, key) in d" class="border p-4">
        {{ key }}
        <Button @click="d[key].toggleDocked">Dock</Button>
      </div>
    </div>
    <Fade>
      <div
        v-if="!d.first.docked.value"
        ref="draggable1"
        class="z-10 w-full cursor-grab touch-none select-none overflow-hidden rounded border border-gray-700 bg-black/80 p-16 backdrop-blur-lg transition-colors md:fixed md:w-fit md:border-gray-500 md:hover:border-gray-400"
        :class="[
          isDragging1 ? 'z-40 cursor-grabbing !border-gray-100' : '',
          d.first.front.value ? 'z-40' : '',
        ]"
        :style="style1"
      >
        <Stack>
          <div>First front {{ d.first.front }}</div>
          <div>docked {{ d.first.docked }}</div>
          <Button @click="d.first.toggleDocked"> Dock </Button>
        </Stack>
      </div>
    </Fade>
    <Fade>
      <div
        v-if="!d.second.docked.value"
        ref="draggable2"
        class="z-10 w-full cursor-grab touch-none select-none overflow-hidden rounded border border-gray-700 bg-black/80 p-16 backdrop-blur-lg transition-colors md:fixed md:w-fit md:border-gray-500 md:hover:border-gray-400"
        :class="[
          isDragging2 ? 'z-40 cursor-grabbing !border-gray-100' : '',
          d.second.front.value ? 'z-40' : '',
        ]"
        :style="style2"
      >
        <Stack>
          <div>Second front {{ d.second.front }}</div>
          <div>dock {{ d.second.docked }}</div>
          <Button @click="d.second.toggleDocked"> Dock </Button>
        </Stack>
      </div>
    </Fade>
  </div>
</template>
