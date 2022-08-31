<script setup lang="ts">
import IconArrowDown from "~icons/radix-icons/arrow-down";

type Props = {
  channel: string;
};
const { channel } = defineProps<Props>();

const scrollable = ref<HTMLElement | null>(null);
const textarea = ref<HTMLTextAreaElement | HTMLInputElement | null>(null);

const {
  chatMessages,
  newChatMessage,
  sendChatMessage,
  newChatMessagesCount,
  scrollToBottom,
} = useChat(channel, scrollable, textarea);
const { data: chatMessagesHistory } = await useChatHistory(channel);
const messages = computed(() => [
  ...(chatMessagesHistory.value || []),
  ...chatMessages.value,
]);
onMounted(() => {
  scrollToBottom();
});
const { lang } = useLang();
</script>

<template>
  <div class="flex flex-col gap-2 p-2 pt-3">
    <div
      ref="scrollable"
      class="relative flex h-full flex-col gap-5 overflow-y-auto p-2"
      :class="[newChatMessagesCount ? 'scroll-smooth' : '']"
    >
      <div v-for="message in messages">
        <div class="mb-1 whitespace-pre-wrap font-mono text-xs text-gray-500">
          {{ message.username }}
        </div>
        <div class="whitespace-pre-wrap font-mono text-sm">
          {{ message.value }}
        </div>
      </div>
    </div>
    <div class="flex h-0 -translate-y-10 justify-center">
      <FadeTransition>
        <div
          v-if="newChatMessagesCount > 0"
          @click="scrollToBottom"
          class="grid h-5 w-5 cursor-pointer place-content-center rounded-full border border-gray-400 bg-black/20 p-4 backdrop-blur transition hover:border-gray-300"
        >
          <IconArrowDown class="h-3 w-3 border-gray-500" />
        </div>
      </FadeTransition>
    </div>
    <div class="flex w-full items-end gap-2">
      <Textarea
        class="overflow-x-scroll text-sm"
        ref="textarea"
        v-model="newChatMessage"
        :placeholder="['Your chat message', 'Sinu sõnum'][lang]"
      />
      <Button primary @click="sendChatMessage"
        >{{ ["Send", "Saada"][lang] }}
      </Button>
    </div>
  </div>
</template>
