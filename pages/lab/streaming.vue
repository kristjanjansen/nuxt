<script setup lang="ts">
const url = "https://streaming.elektron.art/hls/stream6.m3u8";
</script>

<template>
  <Stack class="grid grid-cols-2 p-4 md:p-6">
    <Videostream :url="url" />
  </Stack>
</template>
