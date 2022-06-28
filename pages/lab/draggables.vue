<script setup lang="ts">
const draggables = useDraggables({
  first: { x: 300, y: 300 },
  second: { x: 400, y: 100 },
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
