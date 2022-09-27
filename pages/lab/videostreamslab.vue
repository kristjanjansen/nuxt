<script setup lang="ts">
definePageMeta({
  labTitle: "Videostreams",
  labIntro: "Testing video providers",
  labGroup: "",
});

const [stream1, stream2] = getVideostreams("elektron,anything");

const video1 = ref<HTMLVideoElement | null>(null);
useVideostream(video1, stream1.url);

const video2 = ref<HTMLVideoElement | null>(null);
useVideostream(video2, stream2.url);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">Lab</Button>
    <Title>Streaming test</Title>
    <div class="grid gap-8 md:grid-cols-2">
      <Stack>
        <Title medium>Levira streaming with transcoding</Title>
        <Title small>Input</Title>
        <div class="break-all font-mono text-green-400">
          {{ stream1.ingest }}
        </div>
        <Title small>Streamkey in OBS etc</Title>
        <div class="font-mono text-green-400">{{ stream1.streamkey }}</div>
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
        <Button small :href="stream1.url">Open stream in Safari</Button>
      </Stack>
      <Stack>
        <Title medium>Elektron streaming without transcoding</Title>
        <Title small>Input</Title>
        <div class="break-all font-mono text-green-400">
          {{ stream2.ingest }}
        </div>
        <Title small>Streamkey in OBS etc</Title>
        <div class="font-mono text-green-400">{{ stream2.streamkey }}</div>
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
        <Button small :href="stream2.url">Open stream in Safari</Button>
      </Stack>
    </div>
  </Stack>
</template>
