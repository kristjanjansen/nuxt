<script setup lang="ts">
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
