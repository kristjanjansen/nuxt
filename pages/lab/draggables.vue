<script setup lang="ts">
const indexes = ref([]);
const zIndex = (key) => {
  const index = indexes.value.findIndex((index) => index === key);
  return index > -1 ? index + 1 : "";
};
const useDraggables = (initialDraggables: any) => {
  const keys = Object.keys(initialDraggables);
  const draggables = keys.map((key) => {
    const x = ref(initialDraggables[key].x);
    const y = ref(initialDraggables[key].y);
    const updateIndex = () =>
      (indexes.value = unique([...indexes.value, key].reverse()).reverse());
    const update = ({ x: newX = undefined, y: newY = undefined }) => {
      x.value = newX;
      y.value = newY;
      updateIndex();
    };
    const docked = ref(initialDraggables[key].docked || false);
    const dock = () => {
      docked.value = !docked.value;
      updateIndex();
    };
    const index = () => zIndex(key);
    const getDock = () => docked.value;
    return {
      ...initialDraggables[key],
      x,
      y,
      update,
      docked,
      dock,
      index,
      getDock,
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

const draggables = useDraggables({
  first: { x: 300, y: 300 },
  second: { x: 400, y: 400 },
  third: { x: 500, y: 500 },
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
    <pre class="pointer-events-none select-none text-gray-500">
      {{ draggables }}
    </pre>
    <div class="fixed bottom-0 left-4 flex">
      <button
        v-for="(draggable, key) in draggables"
        @click="draggable.dock"
        class="flex border-t border-r border-gray-600 py-2 px-4 font-mono text-sm uppercase text-gray-400 transition first:border-l hover:bg-gray-900"
        :class="draggable.getDock() ? '!bg-gray-700 !text-gray-200' : ''"
      >
        {{ key }}
      </button>
    </div>
    <Draggable2 v-for="(draggable, key) in draggables" v-bind="draggable">
      <Stack class="p-8">
        <Title small>{{ key }}</Title>
        <Button @click="draggable.dock">Dock it</Button>
      </Stack>
    </Draggable2>
  </div>
</template>
