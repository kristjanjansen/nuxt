haha
<script setup lang="ts">
const config = useRuntimeConfig();

const scrollable = ref<HTMLElement | null>(null);
const textarea = ref<HTMLTextAreaElement | HTMLInputElement | null>(null);

const {
  chatMessages,
  newChatMessage,
  sendChatMessage,
  newChatMessagesCount,
  scrollToBottom,
  focus,
} = useChat(config.public.wsUrl, "test", scrollable, textarea);
</script>

<template>
  <div class="flex flex-col gap-2 p-2">
    <div
      ref="scrollable"
      class="flex h-full flex-col gap-6 overflow-y-auto p-2"
      :class="[newChatMessagesCount ? 'scroll-smooth' : '']"
    >
      <div
        v-for="message in chatMessages"
        class="whitespace-pre-wrap font-mono text-sm"
      >
        {{ message.value }}
      </div>
    </div>
    <div class="h-5">
      <Fade>
        <div v-if="newChatMessagesCount > 0" @click="scrollToBottom">V</div>
      </Fade>
    </div>
    <div class="flex w-full gap-2">
      <Textarea class="text-sm" ref="textarea" v-model="newChatMessage" />
      <Button primary @click="sendChatMessage">Send</Button>
    </div>
  </div>
</template>
