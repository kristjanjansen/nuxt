<script setup lang="ts">
type Props = {
  title?: string;
  url?: string;
};

const { title } = defineProps<Props>();
const { lang } = useLang();
</script>
<template>
  <EBox color="accent" ratio="1 / 1" layout="columns1">
    <ETitle v-if="title" el="h3" size="lg" :title="title" />
    <a :href="url" target="_blank" :alt="`Read more on ${title}`">
      <EContent>{{ ["Read more", "Loe edasi"][lang] }}</EContent>
    </a>
  </EBox>
</template>

<style scoped>
.EBox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
