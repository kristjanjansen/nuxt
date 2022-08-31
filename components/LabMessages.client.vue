<script setup lang="ts">
const { messages, sendMessage } = useMessages();
const send = () => sendMessage({ type: "TEST" });
</script>

<template>
  <Stack>
    <Button @click="send">Send message</Button>
    <Title small>Received messages:</Title>
    <div
      v-if="messages?.length"
      @click="messages = []"
      class="whitespace-pre font-mono"
    >
      {{ messages }}
    </div>
  </Stack>
</template>
