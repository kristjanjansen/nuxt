<script setup lang="ts">
import IconCircle from "~icons/ph/circle-fill";

type Props = {
  messages: any[];
  controls: any[];
};
const props = defineProps<Props>();

const controlsData = useControlsData(
  toRef(props, "messages"),
  toRef(props, "controls")
);
const username = ref(null);
</script>

<template>
  <Stack class="gap-10">
    <Stack v-for="d in controlsData" class="items-strech">
      <Title small>{{ d.control.title || d.type }}</Title>
      <Code>{{
        formatData({
          Type: d.type,
          "Graph start": formatTimePrecise(d.xMin),
          "Data start": formatTimePrecise(d.xDataMin),
          "Data end": formatTimePrecise(d.xDataMax),
          "Graph end": formatTimePrecise(d.xMax),
          "Min value": d.yDataMin,
          "Max value": d.yDataMax,
        })
      }}</Code>
      <ControlsGraph :data="d" :username="username" />
      <div>
        <button
          v-for="user in d.users"
          @click="d.users.length > 1 ? (username = user.username) : null"
          class="flex items-center gap-2"
          :class="
            !username || user.username === username
              ? 'opacity-100'
              : 'opacity-30'
          "
        >
          <IconCircle
            class="h-3 w-3"
            :style="{
              color: user.color,
            }"
          />
          <Code class="text-white">
            {{ user.username }}
          </Code>
        </button>
        <Button
          small
          @click="username = null"
          :class="username ? 'opacity-50' : 'opacity-0'"
        >
          Show all users
        </Button>
      </div>
    </Stack>
  </Stack>
</template>
