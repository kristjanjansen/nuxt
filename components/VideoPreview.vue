<script setup lang="ts">
import { useMediaControls } from "@vueuse/core";

type Props = {
  file: any;
};
const { file } = defineProps<Props>();
const video = ref(null);
const { currentTime, duration } = useMediaControls(video);
watchEffect(() => (currentTime.value = duration.value / 2));
onMounted(() => (currentTime.value = duration.value / 2));
const data = {
  Streamkey: file.streamkey,
  Start: file.start_at_formatted,
  End: file.end_at_formatted,
  Duration: file.duration_formatted,
};
</script>

<template>
  <Card class="!rounded p-0 transition hover:brightness-125">
    <video ref="video" :src="file.src" controls class="aspect-video" />
    <Data :data="data" class="p-4" />
  </Card>
</template>
