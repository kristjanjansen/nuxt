<script setup lang="ts">
const a = ref(true);
</script>

<template>
  <Button @click="a = !a">Toggle</Button>
  <div v-if="a" class="text-[orange]">Hello</div>
</template>
