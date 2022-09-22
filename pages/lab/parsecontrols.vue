<script setup lang="ts">
import { autoType } from "d3";

const defaultControls = `type: DATA_1
title: How do you feel!!!!
labels: 🤯,😇,😃
min: 0
max: 5
step: 1
description: Please: enter some data
---
type: DATA_2
title:  Some other data
min: 0
step: 0.01`;

const parseControls = (controlsConfig: string) => {
  return controlsConfig
    .split(/\n---\s*\n/g)
    .map((chunk) =>
      chunk
        .split("\n")
        .filter((row) => row.trim())
        .map((row) => {
          return row.split(/:\s*(.+)/).filter((r) => r);
        })
    )
    .map((chunk) => autoType(Object.fromEntries(chunk)))
    .map((chunk: any) => {
      if (!chunk) {
        return;
      }
      return {
        control: chunk.control === "text" ? "text" : "slider",
        title: "",
        description: "",
        min: 0,
        max: chunk.max > chunk.min ? chunk.max : 10,
        step: "any",
        ...chunk,
        value: ref(chunk.control === "text" ? "" : chunk.value ?? 0),
        labels: chunk.labels
          ? chunk.labels.split(",").map((l) => l.trim())
          : null,
      };
    });
};

const controls = ref(defaultControls);
const parsedControls = computed(() => parseControls(controls.value));

const channel = "experiment";
</script>

<template>
  <Stack class="p-4 md:p-6">
    <Title>Controls</Title>
    <div class="grid grid-cols-4 items-start gap-8">
      <Stack>
        <Title medium>Controls field in Strapi</Title>
        <Textarea v-model="controls"
      /></Stack>
      <Stack>
        <Title medium>Parsed controls</Title>
        <div class="whitespace-pre-wrap font-mono text-sm text-gray-500">
          {{ parsedControls }}
        </div></Stack
      >
      <Stack>
        <Title medium>Rendered controls</Title>
        <Card> <Controls :channel="channel" :controls="parsedControls" /> </Card
      ></Stack>
      <Stack class="h-[80vh] overflow-y-auto">
        <Title medium>Websocket messages</Title>
        <LabMessage :channel="channel" />
      </Stack>
    </div>
  </Stack>
</template>
