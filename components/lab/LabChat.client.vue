<script setup lang="ts">
import { useFocus, useScroll } from "@vueuse/core";

const config = useRuntimeConfig();

const scrollable = ref<any>(null);
const textarea = ref<any>(null);

const { chatMessages, newChatMessage, onNewChatMessage, newMessagesCount } =
  useChat(config.public.wsUrl, "test", scrollable, textarea);

const { focused } = useFocus(textarea, { initialValue: true });

const sampleMessage =
  "When I heard about support for WebSocket protocols in Postman, I immediately wanted to explore the big feature thoroughly. And since learning about a tool by playing around with it firsthand is always an interesting and direct approach, I started to build some WebSocket servers to test them out via Postman. While these servers weren’t initially intended to launch as a public echo service, they’ve proven helpful—and now I hope they’ll be able to assist other developers in the Postman community as they navigate WebSockets.";

const scrollData = useScroll(scrollable);

watch(chatMessages, () => (scrollData.arrivedState.bottom = true));

const scrollToBottom = () =>
  (scrollable.value.scrollTop = scrollable.value.scrollHeight);

const onSend = () => {
  onNewChatMessage();
  focused.value = true;
  scrollToBottom();
};
</script>

<template>
  <div>
    <div class="debug grid h-[50vh] w-full grid-cols-2 gap-6">
      <Stack class="justify-end">
        <div class="relative w-full">
          <div
            class="invisible max-h-64 whitespace-pre-wrap border border-green-500 bg-black p-4 font-mono text-white"
          >
            {{ newChatMessage + " " }}
          </div>
          <textarea
            ref="textarea"
            v-model="newChatMessage"
            class="min-h-8 absolute inset-0 whitespace-pre-wrap border-green-500 bg-black/0 p-4 font-mono text-white"
          />
        </div>
        <div class="flex gap-4">
          <Button @click="newChatMessage = sampleMessage">
            Paste sample message
          </Button>
          <Button primary @click="onSend">Send message</Button>
        </div>
        <Button @click="scrollToBottom"> Scroll to bottom </Button>
      </Stack>
      <div ref="scrollable" class="overflow-y-auto font-mono">
        <Card v-for="message in chatMessages">{{ message.value }}</Card>
      </div>
    </div>
    <pre>{{ scrollData }}</pre>
  </div>
</template>
