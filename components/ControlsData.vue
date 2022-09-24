<script setup lang="ts">
import IconCircle from "~icons/ph/circle-fill";

type Props = {
  messages: any[];
  controls: any[];
};
const { messages, controls } = defineProps<Props>();

const controlsData = useControlsData(messages, controls);
</script>

<template>
  <Stack class="gap-10">
    <Stack v-for="d in controlsData" class="items-strech">
      <Title small>{{ d.control.title || d.type }}</Title>
      <Code>{{
        formatData({
          Type: d.type,
          Start: formatTimePrecise(d.xDataMin),
          End: formatTimePrecise(d.xDataMax),
          "Min value": d.yDataMin,
          "Max value": d.yDataMax,
        })
      }}</Code>
      <ControlsGraph :data="d" />
      <div>
        <div v-for="user in d.users">
          <div class="flex items-center gap-2">
            <IconCircle
              class="h-3 w-3"
              :style="{
                color: user.color,
              }"
            />
            <Code class="text-white">
              {{ user.username }}
            </Code>
          </div>
        </div>
      </div>
    </Stack>
  </Stack>
</template>
