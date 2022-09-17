<script setup lang="ts">
const { lang } = useLang();
</script>

<template>
  <div class="font-bold uppercase tracking-wider text-orange-500">
    {{ ["Soon", "Varsti"][lang] }}
  </div>
</template>
