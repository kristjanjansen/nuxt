<script setup lang="ts">
const { lang } = useLang();
</script>

<template>
  <div class="animate-pulse pr-1 font-bold uppercase text-green-400">
    {{ ["Live", "Laiv"][lang] }}
  </div>
</template>
