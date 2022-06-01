<script setup lang="ts">
const config = useRuntimeConfig();
const { messages, sendMessage } = useMessages(config.public.wsUrl);
const testMessages = computed(() =>
  messages.value.filter((m) => m.type === "TEST")
);
const onSend = () => sendMessage({ type: "TEST" });
</script>

<template>
  <div @click="onSend">Send</div>
  <div
    v-if="testMessages?.length"
    @click="messages = []"
    class="fixed right-4 bottom-4 left-4 z-50 h-1/3 overflow-auto whitespace-pre bg-[black] p-4 font-mono md:left-auto md:w-1/3"
  >
    {{ testMessages }}
  </div>
</template>
