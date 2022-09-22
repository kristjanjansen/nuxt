<script setup lang="ts">
import { useWebSocket } from "@vueuse/core";

const useMessages = () => {
  const messages = ref([]);
  const sendMessage = ref((_: any) => {});
  const ws = ref(null);

  onMounted(() => {
    const config = useRuntimeConfig();
    const { ws: websocket, send } = useWebSocket(config.public.wsUrl, {
      autoReconnect: true,
    });
    websocket.value.addEventListener("message", ({ data }) => {
      const message = JSON.parse(data);
      messages.value.push(message);
    });
    ws.value = websocket;
    sendMessage.value = (message: any) =>
      send(
        JSON.stringify({
          id: randomString(),
          datetime: new Date().toISOString(),
          ...message,
        })
      );
  });
  return { messages, sendMessage, ws };
};
const { messages, sendMessage } = useMessages();
const message = ref("Hello");
const userid = useUserId();
const username = useUserName();
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">lab</Button>
    <Title>Messages</Title>
    <Textarea v-model="message" />
    <Button @click="sendMessage({ value: message, userid, username })">
      Send
    </Button>
    <pre>{{ messages }}</pre>
  </Stack>
</template>
