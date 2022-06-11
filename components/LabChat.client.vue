<script setup lang="ts">
import { useFocus, useScroll, onKeyStroke, useKeyModifier } from "@vueuse/core";

const sample =
  "The broad narrative of Hitchhiker follows the misadventures of the last surviving man, Arthur Dent, following the demolition of the Earth by a Vogon constructor fleet to make way for a hyperspace bypass. Dent is rescued from Earth's destruction by Ford Prefect—a human-like alien writer for the eccentric, electronic travel guide The Hitchhiker's Guide to the Galaxy—by hitchhiking onto a passing Vogon spacecraft. Following his rescue, Dent explores the galaxy with Prefect and encounters Trillian, another human who had been taken from Earth (before its destruction) by the two-headed President of the Galaxy Zaphod Beeblebrox and the depressed Marvin, the Paranoid Android. Certain narrative details were changed among the various adaptations.";

const config = useRuntimeConfig();

const scrollable = ref<HTMLElement | null>(null);
const textarea = ref<HTMLTextAreaElement | HTMLInputElement | null>(null);

const { chatMessages, newChatMessage, onNewChatMessage } = useChat(
  config.public.wsUrl,
  "test",
  scrollable,
  textarea
);

const scrollData = useScroll(scrollable);

const newMessages = ref(0);

const { focused } = useFocus(textarea, { initialValue: true });

const scrollToBottom = async () =>
  await nextTick(
    () => (scrollable.value.scrollTop = scrollable.value.scrollHeight)
  );

const onSend = () => {
  onNewChatMessage();
  focused.value = true;
};

// When user is scrolled away from the bottom
// by SCROLL_AWAY_OFFSET

const SCROLL_AWAY_OFFSET = 200;

const scrolledAway = computed(() => {
  return (
    scrollable.value?.scrollHeight -
      scrollable.value?.clientHeight -
      scrollData.y.value >
    SCROLL_AWAY_OFFSET
  );
});

watch(chatMessages, async () => {
  if (scrolledAway.value === false) {
    // When user is in botton, scroll to the
    // bottom of the new message
    scrollToBottom();
  } else {
    // Wheb user has scrolled up from bottom,
    // do not scroll down
    // and add to new message count instead
    newMessages.value++;
  }
});

// When user scrolls back to bottom,
// clear the new messages

watch(scrolledAway, () => {
  if (scrolledAway.value === false) {
    newMessages.value = 0;
  }
});

// Newline on Shift + Enter, submit on Enter

const shift = useKeyModifier("Shift");

onKeyStroke(
  "Enter",
  (e) => {
    if (!shift.value) {
      e.preventDefault();
      onNewChatMessage();
    }
  },
  { target: textarea }
);

const paste = () => {
  newChatMessage.value = sample;
  focused.value = true;
};
const classes = [
  "max-h-64 whitespace-pre-wrap border-gray-500 bg-black/0 px-3 py-2 font-mono text-white focus:border-green-500 focus:ring-0",
];
</script>

<template>
  <div class="w-full">
    <div class="grid h-[70vh] gap-6 md:grid-cols-2">
      <div
        ref="scrollable"
        class="flex flex-col gap-6 overflow-y-auto"
        :class="[newMessages ? 'scroll-smooth' : '']"
      >
        <Card
          v-for="message in chatMessages"
          class="whitespace-pre-wrap font-mono"
        >
          {{ message.value }}
        </Card>
      </div>
      <Stack class="justify-end">
        <div class="relative w-full">
          <div class="invisible" :class="classes">
            {{ newChatMessage + " " }}
          </div>
          <textarea
            ref="textarea"
            v-model="newChatMessage"
            class="absolute inset-0"
            :class="classes"
          />
        </div>
        <p class="text-xs text-gray-500">
          Shift + Enter for newline, Enter to submit
        </p>
        <div class="flex gap-4">
          <Button class="outline-hidden" @click="paste"> Paste example </Button>
          <Button primary @click="onSend">Send message</Button>
        </div>
      </Stack>
    </div>
    <Link class="mt-4 flex" v-if="newMessages > 0" @click="scrollToBottom" down>
      New messages
    </Link>
  </div>
</template>
