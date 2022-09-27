<script setup lang="ts">
definePageMeta({
  labTitle: "Messages",
  labIntro: "Send and receive websocket messages",
  labGroup: "",
});

const { messages, sendMessage } = useMessages();
const message = ref("Hello");
const userid = useUserId();
const username = useUserName();
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">Lab</Button>
    <Title>Messages</Title>
    <Textarea v-model="message" />
    <Button @click="sendMessage({ value: message, userid, username })">
      Send
    </Button>
    <Code>{{ messages }}</Code>
  </Stack>
</template>
