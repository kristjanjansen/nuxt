<script setup lang="ts">
import { differenceInMinutes } from "date-fns";

type Props = {
  messages: any[];
};
const { messages } = defineProps<Props>();
const messageStyle = (message, i) => {
  return {
    left: message.x - 5 + "%",
    top: message.y + "%",
    opacity: 0.5 + i * 0.02,
  };
};
</script>

<template>
  <div class="relative">
    <div
      v-for="(message, i) in messages"
      class="md:font-base font-xs absolute font-mono text-sm leading-tight text-neutral-200 blur"
      :style="{ ...messageStyle(message, i), opacity: 1 }"
    >
      {{ message.value }}
    </div>
    <div
      v-for="(message, i) in messages"
      class="md:font-base font-xs absolute font-mono text-sm leading-tight text-neutral-200"
      :style="messageStyle(message, i)"
    >
      {{ message.value }}
    </div>
  </div>
</template>
