<script setup lang="ts">
import { useDraggable } from "@vueuse/core";

const useDraggables = (initialDraggables: any) => {
  const keys = Object.keys(initialDraggables);
  const draggables = keys.map((key) => {
    const x = ref(initialDraggables[key].x);
    const y = ref(initialDraggables[key].y);
    const update = ({ x: newX, y: newY }) => {
      x.value = newX;
      y.value = newY;
    };
    const docked = ref(initialDraggables[key].docked || false);
    const dock = () => (docked.value = !docked.value);

    return {
      ...initialDraggables[key],
      x,
      y,
      update,
      docked,
      dock,
    };
  });

  /*
  const update = ({ x, y }) => {
      data.x = x;
      data.y = y;
      //resetFront();
      //data.front = true;
    };
    const dock = () => {
      console.log("dock");
      data.docked = !data.docked;
      //resetFront();
      //data.front = true;
    };*/
  // draggables.forEach((draggable) => {
  //   draggable.toggleFront = () => {
  //     Object.keys(draggables).forEach(
  //       (k) => (draggables[k].front.value = false)
  //     );
  //     draggable.front.value = true;
  //   };
  //   draggable.toggleDocked = () => {
  //     draggable.docked.value = !draggable.docked.value;
  //     draggable.toggleFront();
  //   };
  //   draggable.update = ({ x, y }) => {
  //     draggable.x.value = x;
  //     draggable.y.value = y;
  //   };
  //   return draggable;
  // });
  return Object.fromEntries(keys.map((key, i) => [key, draggables[i]]));
};

const d = useDraggables({
  first: { x: 300, y: 300 },
  second: { x: 400, y: 400 },
});

// const draggable1 = ref<HTMLElement | null>(null);
// const { style: style1, isDragging: isDragging1 } = useDraggable(draggable1, {
//   initialValue: { x: d.first.x, y: d.first.y },
//   onStart: d.first.toggleFront,
// });

// const draggable2 = ref<HTMLElement | null>(null);
// const { style: style2, isDragging: isDragging2 } = useDraggable(draggable2, {
//   initialValue: { x: d.second.x, y: d.second.y },
//   onStart: d.second.toggleFront,
// });

const log = (a) => console.log(a);
</script>

<template>
  <div class="p-4 md:p-6">
    <pre>{{ d }}</pre>
    <div class="fixed bottom-0 left-4 flex">
      <div v-for="(dock, key) in d" class="border p-4">
        {{ key }}
        <Button @click="d[key].dock">{{ d[key].docked }}</Button>
      </div>
    </div>
    <Draggable2 v-bind="d.first" @dock="d.first.dock" @update="d.first.update">
      <Stack class="p-16">
        <Button @click="d.first.dock">First Dock</Button>
      </Stack>
    </Draggable2>
    <Draggable2
      v-bind="d.second"
      @dock="d.second.dock"
      @update="d.second.update"
    >
      <Stack class="p-16">
        <Button @click="d.second.dock">Second Dock</Button>
      </Stack>
    </Draggable2>
  </div>
</template>
