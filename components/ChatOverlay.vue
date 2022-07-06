<script setup lang="ts">
import { differenceInMinutes } from "date-fns";

type Props = {
  messages: any[];
};
const { messages } = defineProps<Props>();
const messageStyle = (message) => {
  return {
    left: message.x - 5 + "%",
    top: message.y + "%",
  };
};
</script>

<template>
  <div class="relative">
    <div
      v-for="message in messages"
      class="font-xs md:font-base absolute leading-tight"
      :style="messageStyle(message)"
    >
      {{ message.value }}
    </div>
  </div>
</template>
