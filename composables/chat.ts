import { computed, Ref, ref } from "vue";

interface UseChatOptions {
  userId?: Ref<string>;
  userName?: Ref<string>;
  sentMessageType?: string;
  receiveMessageType?: string;
}

export function useChat(
  url: string,
  channel: string,
  scrollable: Ref<HTMLElement>,
  textarea: Ref<HTMLInputElement | HTMLTextAreaElement>,
  options: UseChatOptions = {}
) {
  const {
    userId = ref(""),
    userName = ref(""),
    sentMessageType = "CHAT",
    receiveMessageType = "CHAT",
  } = options;

  const { messages, sendMessage } = useMessages(url);

  const chatMessages = computed(() => {
    return messages.value.filter(
      (m) => m.type === receiveMessageType && m.channel === channel
    );
  });

  const newChatMessage = ref("");

  const onNewChatMessage = () => {
    if (newChatMessage.value.trim()) {
      sendMessage({
        channel: channel,
        userId: userId.value,
        userName: userName.value,
        type: sentMessageType,
        value: newChatMessage.value,
        // store: true,
      });
      newChatMessage.value = "";
    }
  };

  const lastMessagesCount = ref<number>(0);

  const newMessagesCount = computed(
    () => chatMessages.value.length - lastMessagesCount.value
  );

  return {
    chatMessages,
    newChatMessage,
    onNewChatMessage,
    newMessagesCount,
  };
}
