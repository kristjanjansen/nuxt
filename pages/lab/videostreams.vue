<script setup lang="ts">
const [stream1, stream2] = getVideostreams("elektron,anything");

const video1 = ref<HTMLVideoElement | null>(null);
useVideostream(video1, stream1.url);

const video2 = ref<HTMLVideoElement | null>(null);
useVideostream(video2, stream2.url);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Link left to="/lab">Lab</Link>
    <Title>Streaming test</Title>
    <div class="grid grid-cols-2 gap-8">
      <Stack>
        <Title medium>Levira streaming with transcoding</Title>
        <Title small>Input</Title>
        <pre class="text-green-500">{{ stream1.ingest }}</pre>
        <Title small>Streamkey in OBS etc</Title>
        <pre class="text-green-500">{{ stream1.streamkey }}</pre>
        <Title small>Streamkey in Strapi</Title>
        <pre class="text-blue-500">elektron</pre>
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
        <Title small>HLS output</Title>
        <div class="break-all font-mono">{{ stream1.url }}</div>
        <Link :href="stream1.url" target="_blank">Open stream in Safari</Link>
      </Stack>
      <Stack>
        <Title medium>Elektron streaming without transcoding</Title>
        <Title small>Input</Title>
        <pre class="text-green-500">{{ stream2.ingest }}</pre>
        <Title small>Streamkey in OBS etc</Title>
        <pre class="text-green-500">{{ stream2.streamkey }}</pre>
        <Title small>Streamkey in Strapi</Title>
        <pre class="text-blue-500">anything</pre>
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
        <Title small>HLS output</Title>
        <div class="break-all font-mono">{{ stream2.url }}</div>
        <Link :href="stream2.url" target="_blank">Open stream in Safari</Link>
      </Stack>
    </div>
  </Stack>
</template>
