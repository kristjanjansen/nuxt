<script setup lang="ts">
const { lang } = useLang();
</script>
<template>
  <Stack class="p-4 md:p-6">
    <Link left to="/" />
    <Title>{{ ["WTF elektron", "Meist"][lang] }}</Title>
    <p>TODO</p>
  </Stack>
</template>
