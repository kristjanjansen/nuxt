<script setup lang="ts">
const config = useRuntimeConfig();
const { messages, sendMessage } = useMessages(config.public.wsUrl);
const onSend = () => sendMessage({ hello: "world" });
</script>

<template>
  <div class="z-50">
    <div @click="onSend">Send</div>
    <div
      class="fixed right-4 bottom-4 left-4 z-50 h-1/3 overflow-auto whitespace-pre bg-[black] p-4 font-mono md:left-auto md:w-1/3"
    >
      {{ messages }}
    </div>
  </div>
</template>
