<script setup lang="ts">
const config = useRuntimeConfig();
const { messages, sendMessage } = useMessages(config.public.wsUrl);
const testMessages = computed(() =>
  messages.value.filter((m) => m.type === "TEST")
);
const onTest = () => sendMessage({ type: "TEST" });
</script>

<template>
  <div>
    <div @click="onTest">Test</div>
    <div
      v-if="testMessages?.length"
      @click="messages = []"
      class="fixed right-4 bottom-4 left-4 z-50 h-1/3 overflow-auto whitespace-pre bg-black p-4 normal-case font-mono md:left-auto md:w-1/3"
    >
      {{ testMessages }}
    </div>
  </div>
</template>
