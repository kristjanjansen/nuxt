<script setup lang="ts">
import { debouncedWatch } from "@vueuse/core";

type Props = {
  controls: any;
};
const { controls: defaultControls } = defineProps<Props>();

const { sendMessage } = useMessages();
const userId = useUserId();
const userName = useUserName();

const controls = ref([]);

watch(
  () => defaultControls,
  () => (controls.value = defaultControls),
  { immediate: true }
);

debouncedWatch(
  () => controls.value.map((c) => c.value),
  (controlsValues, prevControlsValues) => {
    controlsValues.forEach((controlsValue, i) => {
      if (controlsValue !== prevControlsValues[i]) {
        const c = controls.value[i];
        if (c.control === "slider") {
          const message = {
            channel: c.channel,
            type: c.type,
            value: controlsValue,
            userid: userId.value,
            username: userName.value,
          };
          sendMessage.value(message);
        }
      }
    });
  },
  { deep: true, debounce: 200 }
);
</script>

<template>
  <div>
    <div v-for="(c, i) in controls" :key="i">
      <Title small v-if="c.title">{{ c.title }}</Title>
      <div class="tracking-wide text-gray-500">{{ c.description }}</div>
      <input
        v-if="c.control === 'slider'"
        type="range"
        v-model="c.value"
        :min="c.min"
        :max="c.max"
        :step="c.step"
        class="w-full accent-green-400"
      />
      <Textarea v-if="c.control === 'text'" v-model="c.value" />
      <div v-if="c.labels" class="flex justify-between tracking-wide">
        <div v-for="label in c.labels" :key="label" class="tracking-wide">
          {{ label }}
        </div>
      </div>
    </div>
  </div>
</template>
