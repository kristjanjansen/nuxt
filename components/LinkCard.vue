<script setup lang="ts">
type Props = {
  to: string;
};
const { to } = defineProps<Props>();
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <NuxtLink :to="to">
    <Card v-bind="$attrs" class="transition-all hover:bg-gray-900"
      ><slot
    /></Card>
  </NuxtLink>
</template>
