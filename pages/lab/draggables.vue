<script setup lang="ts">
import { useDraggable } from "@vueuse/core";

const useDraggables = (initialDraggables: any) => {
  const keys = Object.keys(initialDraggables);
  let draggables = keys.map((key) => {
    const front = ref(false);
    const docked = ref(initialDraggables[key].docked || false);
    const x = ref(initialDraggables[key].x);
    const y = ref(initialDraggables[key].y);
    return { ...initialDraggables[key], x, y, front, docked };
  });
  draggables.forEach((draggable) => {
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
    draggable.update = ({ x, y }) => {
      console.log(x, y);
      draggable.x.value = x;
      draggable.y.value = y;
    };
    return draggable;
  });
  return Object.fromEntries(keys.map((key, i) => [key, draggables[i]]));
};

const d = useDraggables({
  first: { x: 300, y: 300 },
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

const log = (a) => console.log(a);
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
    <Draggable2
      v-bind="d.first"
      @toggleDocked="d.first.toggleDocked"
      @update="d.first.update"
    >
      <Stack class="p-8">
        <div>First front {{ d.first.front }}</div>
        <div>docked {{ d.first.docked }}</div>
        <Button @click="d.first.toggleDocked"> Dock </Button>
      </Stack>
    </Draggable2>
    <Draggable2
      v-bind="d.second"
      @toggleDocked="d.second.toggleDocked"
      @update="d.second.update"
    >
      <Stack class="p-8">
        <div>Second front {{ d.second.front }}</div>
        <div>dock {{ d.second.docked }}</div>
        <Button @click="d.second.toggleDocked"> Dock </Button>
      </Stack>
    </Draggable2>
  </div>
</template>
