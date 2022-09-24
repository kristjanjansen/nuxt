<script setup lang="ts">
import IconCircle from "~icons/ph/circle-fill";
import { extent, groups, flatGroup, min, max } from "d3";
import { add } from "date-fns";

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

const messagesByTypeAndUser = computed(() =>
  groups(
    messages.value,
    (m) => m.type,
    (m) => m.username
  )
);

const formatData = (data) => {
  const maxLength = Math.max(...Object.keys(data).map((k) => k.length));
  return Object.entries(data)
    .map(([key, value]) => `${(key + ":").padEnd(maxLength + 1)} ${value}`)
    .join("\n");
};

const parsedControlMessages = computed(() => {
  const groupedMessages = groups(messages.value, (m) => m.type).map(
    ([typeKey, messages]) => {
      const controls = parsedControls.value.filter(
        (c) => c.type === typeKey
      )[0];
      const [xMinExtent, xMaxExtent] = extent(
        messages,
        (m) => new Date(m.datetime)
      );
      const xMin = xMinExtent;
      // We make the maximum x scale "min time + 15min" or
      // max time when the data exceeds +15min
      const xMax = max([
        add(xMinExtent, { minutes: 15 }),
        new Date(xMaxExtent),
      ]);
      // const [yMinExtent, yMaxExtent] = extent(messages, (m) => m.value);
      const yMin = controls.min;
      const yMax = controls.max;
      const users = groups(messages, (m) => m.username).map(
        ([userKey, messages]) => {
          return {
            username: userKey,
            color: stringToColor(userKey),
            messages,
          };
        }
      );
      return { type: typeKey, xMin, xMax, yMin, yMax, controls, users };
    }
  );
  return groupedMessages;
});
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
        <div class="whitespace-pre-wrap font-mono text-sm text-gray-400">
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
              class="whitespace-pre-wrap font-mono text-sm text-gray-400"
            >
              {{ m }}
            </div>
          </MoveTransition>
        </ClientOnly>
      </Stack>
      <Stack>
        <Title medium>Parsed data</Title>
        <div>
          <!-- <pre class="text-sm text-gray-400">{{ messagesByType }}</pre> -->
          <Stack v-for="t in parsedControlMessages">
            <Title medium>{{ t.type }}</Title>
            <pre>{{ formatData({ start: 1, end: 2 }) }}</pre>
            <Stack v-for="user in t.users">
              <div class="flex items-center gap-2">
                <IconCircle
                  :style="{
                    color: user.color,
                  }"
                />
                <div class="font-mono text-sm">
                  {{ user.username }}
                </div>
              </div>
              <div class="font-mono text-sm text-gray-400">
                {{ user.messages }}
              </div>
            </Stack>
          </Stack>
        </div>
      </Stack>
    </div>
  </Stack>
</template>

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
