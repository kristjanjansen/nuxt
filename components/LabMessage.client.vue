<script setup lang="ts">
type Props = {
  channel: any;
};
const { channel } = defineProps<Props>();
const { messages } = useMessages();
</script>

<template>
  <Button @click="messages = []" :disabled="!messages.length">
    Clear messages
  </Button>
  <MoveTransition>
    <div
      v-for="m in messages.filter((m) => m.channel === channel)"
      :key="m.id"
      class="whitespace-pre-wrap font-mono text-sm text-gray-300"
    >
      {{ m }}
    </div>
  </MoveTransition>
</template>
