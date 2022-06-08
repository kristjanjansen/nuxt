<script setup lang="ts">
const config = useRuntimeConfig();
const { messages, sendMessage } = useMessages(config.public.wsUrl);
const testMessages = computed(() =>
  messages.value.filter((m) => m.type === "TEST")
);
const send = () => sendMessage({ type: "TEST" });
</script>

<template>
  <Stack>
    <Button @click="send">Send message</Button>
    <Title small>Received messages:</Title>
    <div
      v-if="testMessages?.length"
      @click="messages = []"
      class="whitespace-pre font-mono"
    >
      {{ testMessages }}
    </div>
  </Stack>
</template>
