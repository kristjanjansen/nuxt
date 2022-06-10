<script setup lang="ts">
import {
  useFocus,
  useScroll,
  useMagicKeys,
  onKeyStroke,
  useKeyModifier,
} from "@vueuse/core";

const sample =
  "The broad narrative of Hitchhiker follows the misadventures of the last surviving man, Arthur Dent, following the demolition of the Earth by a Vogon constructor fleet to make way for a hyperspace bypass. Dent is rescued from Earth's destruction by Ford Prefect—a human-like alien writer for the eccentric, electronic travel guide The Hitchhiker's Guide to the Galaxy—by hitchhiking onto a passing Vogon spacecraft. Following his rescue, Dent explores the galaxy with Prefect and encounters Trillian, another human who had been taken from Earth (before its destruction) by the two-headed President of the Galaxy Zaphod Beeblebrox and the depressed Marvin, the Paranoid Android. Certain narrative details were changed among the various adaptations.";

const config = useRuntimeConfig();

const scrollable = ref<HTMLElement | null>(null);
const textarea = ref<HTMLTextAreaElement | null>(null);

const { chatMessages, newChatMessage, onNewChatMessage, newMessagesCount } =
  useChat(config.public.wsUrl, "test", scrollable, textarea);

const { focused } = useFocus(textarea, { initialValue: true });

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

const scrollData = useScroll(scrollable);

const newMessages = ref(0);

watch(chatMessages, async () => {
  if (diff.value === false) {
    scrollToBottom();
  } else {
    newMessages.value++;
  }
});

const scrollToBottom = async () =>
  await nextTick(
    () => (scrollable.value.scrollTop = scrollable.value.scrollHeight)
  );

const onSend = () => {
  onNewChatMessage();
  focused.value = true;
};

const diff = computed(() => {
  return (
    scrollable.value?.scrollHeight -
      scrollable.value?.clientHeight -
      scrollData.y.value >
    200
  );
});

watch(diff, (newDiff) => {
  if (newDiff === false) {
    newMessages.value = 0;
  }
});

const classes = [
  "max-h-64 whitespace-pre-wrap border-gray-500 bg-black/0 p-4 font-mono text-white focus:border-green-500 focus:ring-0",
];
</script>

<template>
  <div class="w-full">
    <div class="grid h-[50vh] grid-cols-2 gap-6">
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
          <Button class="outline-hidden" @click="newChatMessage = sample">
            Paste example
          </Button>
          <Button primary @click="onSend">Send message</Button>
        </div>
      </Stack>
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
    </div>
    <Link
      class="mt-4 flex justify-end"
      v-if="newMessages > 0"
      @click="scrollToBottom"
      down
    >
      New messages
    </Link>
  </div>
</template>
