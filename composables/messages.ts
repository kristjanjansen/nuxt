import { useWebSocket } from "@vueuse/core";
export const useMessages = () => {
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
