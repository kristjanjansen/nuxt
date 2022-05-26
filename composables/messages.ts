import { useWebSocket } from "@vueuse/core";
const config = useRuntimeConfig();

export const useMessages = () => {
  const data = ref();
  const { data: rawData, send: rawSend } = useWebSocket(config.public.wsUrl, {
    autoReconnect: true,
  });
  watch(rawData, () => (data.value = JSON.parse(rawData.value)));
  const sendMessage = (message) => rawSend(JSON.stringify(message));
  return { data, sendMessage };
};
