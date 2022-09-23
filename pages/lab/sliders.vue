<script setup lang="ts">
const a = ref(50);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Slider v-model="a" />
    <pre>{{ a }}</pre>
  </Stack>
</template>
