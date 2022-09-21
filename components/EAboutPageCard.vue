<script setup lang="ts">
type Props = {
  layout?: "columns1" | "columns2" | "columns3" | "columns4";
  title?: string;
  content?: string;
};

const { layout, title, content } = defineProps<Props>();
</script>
<template>
  <!-- @TODO: minimum aspect ratio is probably needed -->
  <EBox :class="layout">
    <ETitle v-if="title" el="h3" size="lg" :title="title" />
    <EContent v-if="content" :content="content" />
  </EBox>
</template>

<style scoped>
.EBox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.EBox h3 {
  margin-bottom: var(--m-8);
}
</style>
