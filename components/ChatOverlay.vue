<script setup lang="ts">
import { differenceInMinutes } from "date-fns";

type Props = {
  messages: any[];
};
const { messages } = defineProps<Props>();
const messageStyle = (message, i, l) => {
  return {
    left: message.x - 5 + "%",
    top: message.y + "%",
    opacity: 0.2 + i * 0.02,
    filter: `blur(${10 - (i / l) * 10}px)`,
  };
};
</script>

<template>
  <div class="relative">
    <div
      v-for="(message, i) in messages"
      class="md:font-base absolute font-title leading-tight text-neutral-200 md:text-3xl"
      :style="messageStyle(message, i, messages.length)"
    >
      {{ message.value }}
    </div>
  </div>
</template>
