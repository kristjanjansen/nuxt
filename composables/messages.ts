import { ref } from "vue";
import { useWebSocket } from "@vueuse/core";

const wsUrl = "wss://data.elektron.art";

export const useMessages = () => {
  const messages = ref([]);
  const { ws, send } = useWebSocket(wsUrl, {
    autoReconnect: true,
  });
  ws.value.addEventListener("message", ({ data }) => {
    const message = JSON.parse(data);
    messages.value.push(message);
  });

  const sendMessage = (message) =>
    send(JSON.stringify({ ...message, datetime: new Date().toISOString() }));
  return { ws, messages, sendMessage };
};
