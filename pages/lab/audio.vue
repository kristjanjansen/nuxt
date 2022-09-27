<script setup lang="ts">
definePageMeta({
  labTitle: "Audiostream",
  labIntro: "Audio player",
  labGroup: "",
});
const url = "https://sb.err.ee/live/klassikaraadio.m3u8";
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Title>Audiostream</Title>
    <Audiostream :url="url" class="grid h-64 w-full place-content-center" />
  </Stack>
</template>
