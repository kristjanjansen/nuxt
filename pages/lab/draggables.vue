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
</script>

<template>
  <div class="p-4 md:p-6">
    <Dock :draggables="draggables" />
    <Draggable2 v-for="(draggable, key) in draggables" v-bind="draggable">
      <Stack class="p-8">
        <Title small>{{ key }}</Title>
        <Button @click="draggable.setDocked">Dock it</Button>
      </Stack>
    </Draggable2>
  </div>
</template>
