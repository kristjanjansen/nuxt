import { ref } from "vue";

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

// TODO: Unify the two

export const clientUseMessages = () => {
  const m = reactive({
    messages: [],
    sendMessage: (message: any) => null,
    ws: null,
  });

  onMounted(() => {
    const { ws, send } = useWebSocket(wsUrl, {
      autoReconnect: true,
    });

    ws.value.addEventListener("message", ({ data }) => {
      const message = JSON.parse(data);
      m.messages.push(message);
    });

    m.sendMessage = (message: any) =>
      send(
        JSON.stringify({
          id: randomString(),
          datetime: new Date().toISOString(),
          ...message,
        })
      );
  });
  return m;
};
