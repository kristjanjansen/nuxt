<script setup lang="ts">
type Props = {
  image: any;
  alt?: any;
};

const { image, alt = "" } = defineProps<Props>();
</script>

<template>
  <EBox class="EImageCard" layout="columns1">
    <EImage :image="image" :alt="alt" />
  </EBox>
</template>

<style scoped>
.EBox {
  padding: 0;
  overflow: hidden;
}
.EBox .EImage {
  object-fit: cover;
}
</style>
