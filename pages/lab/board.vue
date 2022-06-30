<script setup lang="ts">
import { useIdle } from "@vueuse/core";

const url = "https://sb.err.ee/live/etv.m3u8";
const video = ref<HTMLVideoElement>();
const { width, height } = useVideostream(video, url);
const showVideo = ref(true);
const showDesaturate = ref(false);
const showBlur = ref(false);
const { theme } = useTheme();
</script>
<template>
  <div class="h-full">
    <FadeTransition>
      <video
        v-if="showVideo"
        ref="video"
        muted
        autoplay
        playsinline
        :width="width / 2"
        :height="height / 2"
        class="h-full w-full flex-col object-cover"
        :class="[['', 'invert'][theme]]"
      />
    </FadeTransition>
    <Breadboard
      v-if="showVideo"
      class="bg-black/80 transition duration-[2000ms]"
      :class="[
        showBlur ? 'backdrop-blur-xl' : '',
        showDesaturate ? 'backdrop-saturate-[0.1]' : '',
      ]"
    />
    <Breadboard v-else class="bg-gray-900" />
    <Stack class="absolute top-4 left-4 flex gap-4 md:top-6 md:left-6">
      <Link left to="/lab">lab</Link>
      <Title>Video breadboard</Title>
      <Button @click="showVideo = !showVideo">
        Video: {{ showVideo ? "on" : "off" }}
      </Button>
      <Button @click="showDesaturate = !showDesaturate">
        Desaturate: {{ showDesaturate ? "on" : "off" }}
      </Button>
      <Button @click="showBlur = !showBlur">
        Blur: {{ showBlur ? "on" : "off" }}
      </Button>
    </Stack>
  </div>
</template>
