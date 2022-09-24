<script setup lang="ts">
import IconCircle from "~icons/ph/circle-fill";
import { extent, groups, flatGroup, min, max } from "d3";
import { add } from "date-fns";

type Props = {
  messages: any[];
  controls: any[];
};
const { messages, controls } = defineProps<Props>();

const useControlsData = (messages, controls) =>
  computed(() => {
    const groupedMessages = groups(messages, (m: any) => m.type).map(
      ([typeKey, messages]) => {
        const control = controls.filter((c) => c.type === typeKey)[0];
        const [xDataMin, xDataMax] = extent(
          messages,
          (m) => new Date(m.datetime)
        );
        const xMin = xDataMin;
        // We make the maximum x scale "min time + 1min" or
        // max time when the data exceeds +1min
        const xMax = max([add(xDataMax, { minutes: 1 }), new Date(xDataMax)]);
        const [yDataMin, yDataMax] = extent(messages, (m) => m.value);
        const yMin = control.min;
        const yMax = control.max;
        const users = groups(messages, (m) => m.username).map(
          ([userKey, messages]) => {
            return {
              username: userKey,
              color: stringToColor(userKey),
              messages,
            };
          }
        );
        return {
          type: typeKey,
          xDataMin,
          xDataMax,
          yDataMin,
          yDataMax,
          xMin,
          xMax,
          yMin,
          yMax,
          control,
          users,
        };
      }
    );
    return groupedMessages;
  });

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
