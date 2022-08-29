<script setup lang="ts">
const url1 = "https://streaming.elektron.art/hls/test1.m3u8";
const url2 = "https://streaming.elektron.art/hls/test2.m3u8";
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Title>Streaming test</Title>
    <div class="grid grid-cols-2 gap-8">
      <Stack>
        <Title medium>No transcoding</Title>
        <p>Stream URL:</p>
        <pre>rtmp://streaming.elektron.art/raw</pre>
        <p>Streamkey</p>
        <pre>test1</pre>
        <Videostream :url="url1" class="aspect-video w-full" />
      </Stack>
      <Stack>
        <Title medium>With transcoding</Title>
        <p>Stream URL:</p>
        <pre>rtmp://streaming.elektron.art/transcoding</pre>
        <p>Streamkey</p>
        <pre>test2</pre>
        <Videostream :url="url2" class="aspect-video w-full" />
      </Stack></div
  ></Stack>
</template>
