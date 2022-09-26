<script setup lang="ts">
import { useMediaControls } from "@vueuse/core";

type Props = {
  file: any;
};
const { file } = defineProps<Props>();
const video = ref(null);
// const { currentTime, duration } = useMediaControls(video);
// watchEffect(() => (currentTime.value = duration.value / 2));
const data = {
  Streamkey: file.streamkey,
  Date: formatDate(file.start_at),
  Start: file.start_at_formatted,
  End: file.end_at_formatted,
  Duration: file.duration_formatted,
};
const { theme } = useTheme();
</script>

<template>
  <Card
    class="!rounded p-0 transition"
    :class="['hover:brightness-125', 'hover:brightness-75'][theme]"
  >
    <video ref="video" :src="file.src" controls class="aspect-video" />
    <Data :data="data" class="p-4" />
  </Card>
</template>
