<script setup lang="ts">
import IconCircle from "~icons/ph/circle-fill";

const defaultControls = `channel: experiment
type: DATA_1
title: How do you feel!!!!
labels: 🤯,😇,😃
min: 0
max: 5
step: 1
description: Please: enter some data
---
channel: experiment
type: DATA_2
title:  Some other data
min: 0
step: 0.01`;

const controls = ref(defaultControls);
const parsedControls = computed(() => parseControls(controls.value));
const { messages } = useMessages();

const useControlsMessages = (controlsMessages) => {
  const types = computed(() =>
    uniqueCollection(
      controlsMessages.value.map((c) => c.type),
      "type"
    )
  );

  const users = computed(() =>
    uniqueCollection(
      controlsMessages.value.map((c) => {
        return {
          username: c.username,
          color: stringToColor(c.username),
        };
      }),
      "username"
    )
  );
  /*
  users.value.map(({ username }) =>
        controlsMessages.value.filter(
          (d) => d.type === type && d.username === username
        ))
        */
  const messages = computed(() => {
    return types.value.map((type) => {
      return controlsMessages.value.filter((d) => d.type === type);
    });
  });

  return { users, messages };
};

const { messages: messagesByUser, users } = useControlsMessages(messages);
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Button small left to="/lab">lab</Button>
    <Title>Controls debugger</Title>
    <div class="grid items-start gap-8 md:grid-cols-4">
      <Stack>
        <Title medium>Controls field in Strapi</Title>
        <Textarea v-model="controls" class="text-sm" />
      </Stack>
      <Stack>
        <Title medium>Rendered controls</Title>
        <Card>
          <Controls :controls="parsedControls" />
        </Card>
        <div class="whitespace-pre-wrap font-mono text-sm text-gray-500">
          {{ parsedControls }}
        </div>
      </Stack>
      <Stack class="h-[80vh] overflow-auto">
        <Title medium>Websocket messages</Title>
        <div class="font-mono text-sm">wss://data.elektron.art</div>
        <Button @click="messages = []" :disabled="!messages.length">
          Clear messages
        </Button>
        <ClientOnly>
          <MoveTransition>
            <div
              v-for="m in messages.filter((m) =>
                parsedControls.map((c) => c.channel).includes(m.channel)
              )"
              :key="m.id"
              class="whitespace-pre-wrap font-mono text-sm text-gray-300"
            >
              {{ m }}
            </div>
          </MoveTransition>
        </ClientOnly>
      </Stack>
      <Stack>
        <Title medium>Users</Title>
        <!-- <div>
          <div v-for="user in users" class="flex items-center gap-2">
            <IconCircle
              :style="{
                color: user.color,
              }"
            />
            <div class="font-mono text-sm tracking-wide">
              {{ user.username }}
            </div>
          </div>
        </div>
        <pre class="text-sm text-gray-300">{{ messagesByUser }}</pre> -->
      </Stack>
    </div>
  </Stack>
</template>
