<script setup lang="ts">
const config = useRuntimeConfig();
const { messages, sendMessage } = useMessages(config.public.wsUrl);
const onSend = () => sendMessage({ hello: "world" });
</script>

<template>
  <div>
    <Button @click="onSend">Send</Button>
    <pre>{{ messages }}</pre>
  </div>
</template>
