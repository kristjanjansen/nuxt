<script setup lang="ts">
const url1 = "https://streaming.elektron.art/hls/test1.m3u8";
const url2 = "https://streaming.elektron.art/hls/test2.m3u8";
</script>

<template>
  <Stack class="grid grid-cols-2 gap-8 p-4 md:p-6">
    <Stack>
      <Title>No transcoding</Title>
      <Title medium>Instructions</Title>
      <p>Stream URL:</p>
      <pre>rtmp://streaming.elektron.art/raw</pre>
      <p>Streamkey</p>
      <pre>test1</pre>
      <Videostream :url="url1" />
    </Stack>
    <Stack>
      <Title>With transcoding</Title>
      <Title medium>Instructions</Title>
      <p>Stream URL:</p>
      <pre>rtmp://streaming.elektron.art/transcoding</pre>
      <p>Streamkey</p>
      <pre>test2</pre>
      <Videostream :url="url2" />
    </Stack>
  </Stack>
</template>
