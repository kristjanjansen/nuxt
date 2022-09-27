<script setup>
definePageMeta({
  labTitle: "EComponents",
  labIntro: "Bring in components from v3",
  labGroup: "",
});

const a = ref(50);
</script>

<template>
  <div class="EComponents">
    <EInputRange v-model="a" label="EInputForm" />
  </div>
</template>

<style scoped>
.EComponents {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: var(--gap-4);
}
@media only screen and (min-width: 600px) {
  .EComponents {
    padding: var(--p-6);
  }
}
</style>
