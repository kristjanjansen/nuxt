<script setup lang="ts">
import { useMagicKeys } from "@vueuse/core";

const { lang, changeLang } = useLang();
const { shift, l: lKey } = useMagicKeys();

watchEffect(() => {
  if (shift.value && lKey.value) {
    changeLang();
  }
});
</script>

<template>
  <button @click="changeLang">
    {{ ["ENG", "EST"][lang] }}
  </button>
</template>

<style scoped>
.Lang {
  position: fixed;
  bottom: var(--p-1);
  left: var(--p-1);
}
</style>
