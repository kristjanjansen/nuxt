haha
<script setup lang="ts">
import IconArrowDown from "~icons/radix-icons/arrow-down";

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
      class="relative flex h-full flex-col gap-6 overflow-y-auto p-2"
      :class="[newChatMessagesCount ? 'scroll-smooth' : '']"
    >
      <div
        v-for="message in chatMessages"
        class="whitespace-pre-wrap font-mono text-sm"
      >
        {{ message.value }}
      </div>
    </div>
    <div class="flex h-0 -translate-y-10 justify-center">
      <Fade>
        <div
          v-if="newChatMessagesCount > 0"
          @click="scrollToBottom"
          class="grid h-5 w-5 cursor-pointer place-content-center rounded-full border border-gray-400 bg-black/20 p-4 backdrop-blur transition hover:border-gray-300"
        >
          <IconArrowDown class="h-3 w-3 border-gray-500" />
        </div>
      </Fade>
    </div>
    <div class="flex w-full items-end gap-2">
      <Textarea
        class="overflow-x-scroll text-sm"
        ref="textarea"
        v-model="newChatMessage"
      />
      <Button primary @click="sendChatMessage">Send</Button>
    </div>
  </div>
</template>
