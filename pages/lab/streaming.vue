<script setup lang="ts">
const url1 = "https://streaming.elektron.art/hls/test1.m3u8";
const video1 = ref<HTMLVideoElement | null>(null);
useVideostream(video1, url1);

const video2 = ref<HTMLVideoElement | null>(null);
const url2 = "https://streaming.elektron.art/hls/test2.m3u8";
useVideostream(video2, url2);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Link left to="/lab">Lab</Link>
    <Title>Streaming test</Title>
    <div class="grid grid-cols-2 gap-8">
      <Stack>
        <Title medium>No transcoding</Title>
        <p>Input stream URL</p>
        <pre>rtmp://streaming.elektron.art/raw</pre>
        <p>Input streamkey</p>
        <pre>test1</pre>
        <video
          ref="video1"
          class="aspect-video w-full"
          autoplay
          playsinline
          crossorigin="anonymous"
          loop
          muted
          controls
        />
        <p>Output stream URL</p>
        <pre>{{ url1 }} </pre>
        <a :href="url1" target="_blank" class="underline">Open in Safari</a>
      </Stack>

      <Stack>
        <Title medium>With transcoding</Title>
        <p>Input stream URL:</p>
        <pre>rtmp://streaming.elektron.art/transcode</pre>
        <p>Input streamkey</p>
        <pre>test2</pre>
        <video
          ref="video2"
          class="aspect-video w-full"
          autoplay
          playsinline
          crossorigin="anonymous"
          loop
          muted
          controls
        />
        <p>Output stream URL</p>
        <pre>{{ url2 }} </pre>
        <a :href="url2" target="_blank" class="underline">Open in Safari</a>
      </Stack>
    </div>
  </Stack>
</template>
