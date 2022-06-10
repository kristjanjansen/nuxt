import { computed, Ref, ref } from "vue";

interface UseChatOptions {
  userId?: Ref<string>;
  userName?: Ref<string>;
  sentMessageType?: string;
  receiveMessageType?: string;
}
/*
import { useScroll } from "@vueuse/core";

async function scrollToBottom(scrollRef: HTMLElement | null) {
  if (!scrollRef) {
    return;
  }
  await nextTick();
  scrollRef.scrollTop = scrollRef.scrollHeight;
}

*/

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
    if (newChatMessage.value) {
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

  /*
  const { arrivedState } = useScroll(scrollable);

  const userScrolled = computed(() => !arrivedState.bottom);

  watch(arrivedState, (newValue) => {
    if (newValue.bottom) {
      lastMessagesCount.value = chatMessages.value.length;
    }
  });

  watch([userScrolled, chatMessages], (newValue, oldValue) => {
    if (
      !newValue[0] ||
      (newValue[1].length > 1 &&
        newValue[1][newValue[1].length - 1] &&
        newValue[1][newValue[1].length - 1].userId === userId) ||
      oldValue[1].length === 0
    ) {
      scrollToBottom(scrollable.value);
      lastMessagesCount.value = chatMessages.value.length;
    }
  });

  watch(
    newMessagesCount,
    (newValue) => {
      newMessages.value = newValue;
    },
    { immediate: true }
  );

  */

  return {
    chatMessages,
    newChatMessage,
    onNewChatMessage,
    newMessagesCount,
  };
}
