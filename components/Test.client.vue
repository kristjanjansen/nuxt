<script setup lang="ts">
// import { config, useMessage, safeJsonParse } from "elektro";
// config.wsUrl = "wss://ws.elektron.art";
// const { ws, sendMessage } = useMessage();
// ws.addEventListener("message", ({ data }: any) => {
//   const message = safeJsonParse(data);
//   console.log(message);
// });

import { useWebSocket } from "@vueuse/core";
// onMounted(() => {
//   const config = useRuntimeConfig();
//   console.log(config);
// });
// const useMessages = () => {
//   const data = ref();
//   const { data: rawData, send: rawSend } = useWebSocket(config.public.wsUrl, {
//     autoReconnect: true,
//   });
//   watch(rawData, () => (data.value = JSON.parse(rawData.value)));
//   const sendMessage = (message) => rawSend(JSON.stringify(message));
//   return { data, sendMessage };
// };

// const { sendMessage, data } = useMessages();
// const onSendMessage = () =>
//   sendMessage(JSON.stringify({ channel: "test", type: "TEST" }));
</script>

<template>
  <div class="bg-gray-500 h-8 flex items-center px-2">
    <!-- <button @click="onSendMessage">Send</button>
    {{ data }} -->
  </div>
</template>
