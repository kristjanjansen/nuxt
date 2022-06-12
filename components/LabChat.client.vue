<script setup lang="ts">
const sample =
  "The broad narrative of Hitchhiker follows the misadventures of the last surviving man, Arthur Dent, following the demolition of the Earth by a Vogon constructor fleet to make way for a hyperspace bypass. Dent is rescued from Earth's destruction by Ford Prefect—a human-like alien writer for the eccentric, electronic travel guide The Hitchhiker's Guide to the Galaxy—by hitchhiking onto a passing Vogon spacecraft. Following his rescue, Dent explores the galaxy with Prefect and encounters Trillian, another human who had been taken from Earth (before its destruction) by the two-headed President of the Galaxy Zaphod Beeblebrox and the depressed Marvin, the Paranoid Android. Certain narrative details were changed among the various adaptations.";

const config = useRuntimeConfig();

const scrollable = ref<HTMLElement | null>(null);
const textarea = ref<HTMLTextAreaElement | HTMLInputElement | null>(null);

//@TODO Move to config
const wsUrl = "wss://ws.elektron.art";

const {
  chatMessages,
  newChatMessage,
  sendChatMessage,
  newChatMessagesCount,
  scrollToBottom,
  focus,
} = useChat(wsUrl, "test", scrollable, textarea);

const paste = () => {
  newChatMessage.value = sample;
  focus.value = true;
};

const scrollToTop = () => (scrollable.value.scrollTop = 0);
</script>

<template>
  <div class="w-full">
    <div class="grid h-[70vh] gap-6 md:grid-cols-2">
      <div
        ref="scrollable"
        class="flex flex-col gap-6 overflow-y-auto"
        :class="[newChatMessagesCount ? 'scroll-smooth' : '']"
      >
        <Card
          v-for="message in chatMessages"
          class="whitespace-pre-wrap font-mono"
        >
          {{ message.value }}
        </Card>
      </div>
      <Stack class="justify-end">
        <Textarea ref="textarea" v-model="newChatMessage" />
        <p class="text-xs text-gray-500">
          Shift + Enter for newline, Enter to submit
        </p>
        <div class="flex gap-4">
          <Button class="outline-hidden" @click="paste"> Paste text </Button>
          <Button class="outline-hidden" @click="scrollToTop">
            Scroll to top
          </Button>
          <Button primary @click="sendChatMessage">Send message</Button>
        </div>
      </Stack>
    </div>
    <Link
      class="mt-4 flex"
      v-if="newChatMessagesCount > 0"
      @click="scrollToBottom"
      down
    >
      New messages
    </Link>
  </div>
</template>
