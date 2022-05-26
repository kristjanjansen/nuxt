import { useWebSocket } from "@vueuse/core";

export const useMessages = (url) => {
  const messages = ref([]);
  const { ws, send } = useWebSocket(url, {
    autoReconnect: true,
  });
  ws.value.addEventListener("message", ({ data }) => {
    const message = JSON.parse(data);
    messages.value.push(message.value);
  });

  const sendMessage = (message) => send(JSON.stringify(message));
  return { messages, sendMessage };
};
