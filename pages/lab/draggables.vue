<script setup lang="ts">
const useDraggables = (initialDraggables: any) => {
  const indexes = ref([]);

  const keys = Object.keys(initialDraggables);
  const draggables = keys.map((key) => {
    const x = ref(initialDraggables[key].x);
    const y = ref(initialDraggables[key].y);
    const updateIndex = () =>
      (indexes.value = unique([...indexes.value, key].reverse()).reverse());
    const updateXY = ({ x: newX, y: newY }) => {
      x.value = newX;
      y.value = newY;
      updateIndex();
    };
    const docked = ref(initialDraggables[key].docked || false);
    const setDocked = () => {
      docked.value = !docked.value;
      updateIndex();
    };
    const getIndex = () => {
      const index = indexes.value.findIndex((index) => index === key);
      return index > -1 ? index + 1 : "";
    };
    const getDocked = () => docked.value;
    return {
      ...initialDraggables[key],
      x,
      y,
      updateXY,
      setDocked,
      getDocked,
      getIndex,
    };
  });

  return Object.fromEntries(keys.map((key, i) => [key, draggables[i]]));
};

const draggables = useDraggables({
  first: { x: 300, y: 300 },
  second: { x: 400, y: 400 },
  third: { x: 500, y: 500 },
});

const log = (a) => console.log(a);
</script>

<template>
  <div class="p-4 md:p-6">
    <div class="fixed bottom-0 left-4 flex">
      <button
        v-for="(draggable, key) in draggables"
        @click="draggable.setDocked"
        class="flex border-t border-r border-gray-600 py-2 px-4 font-mono text-sm uppercase text-gray-400 transition first:border-l hover:bg-gray-900"
        :class="draggable.getDocked() ? '!bg-gray-700 !text-gray-200' : ''"
      >
        {{ key }}
      </button>
    </div>
    <Draggable2 v-for="(draggable, key) in draggables" v-bind="draggable">
      <Stack class="p-8">
        <Title small>{{ key }}</Title>
        <Button @click="draggable.setDocked">Dock it</Button>
      </Stack>
    </Draggable2>
  </div>
</template>
