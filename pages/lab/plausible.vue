<script setup lang="ts">
import { usePlausible } from "@huntersofbook/plausible-vue";

const { trackEvent } = usePlausible();
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button @click="trackEvent('user_circlechat')">Bam</Button>
  </Stack>
</template>
