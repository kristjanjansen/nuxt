<script setup lang="ts">
const wsUrl = "wss://data.elektron.art";

const useMessages = () => {
  const m = reactive({
    messages: [],
    sendMessage: (message: any) => null,
    ws: null,
  });

  onMounted(() => {
    const config = useRuntimeConfig();
    const { ws, send } = useWebSocket(config.public.wsUrl, {
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
  return toRefs(m);
};
const a = useMessages();
console.log(a);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Textarea></Textarea>
  </Stack>
</template>
