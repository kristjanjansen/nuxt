<script setup lang="ts">
import IconCapture from "~icons/radix-icons/camera";
const remaining = ref();
const clicks = ref(0);
</script>
<template>
  <Stack class="p-4 md:p-6">
    <RechargingButton @click="clicks++" @remaining="(r) => (remaining = r)">
      <IconCapture />
      Capture / Pildista
    </RechargingButton>
    <div>Clicks {{ clicks }}</div>
    <div>
      When you use all your captures, you can capture again in {{ remaining }} s
    </div>
  </Stack>
</template>
