<script setup lang="ts">
const config = useRuntimeConfig();
const { messages, sendMessage } = useMessages(config.public.wsUrl);
const onSend = () => sendMessage({ hello: "world" });
</script>

<template>
  <div>
    <button @click="onSend">Send</button>
    <div>{{ messages }}</div>
  </div>
</template>
