<script setup lang="ts">
import { debouncedWatch } from "@vueuse/core";

type Props = {
  controls: any;
  channel: string;
};
const { controls: defaultControls, channel } = defineProps<Props>();

const { sendMessage } = useMessages();
const userId = useUserId();
const userName = useUserName();

const controls = reactive(defaultControls);
//const controls2 =
/*defaultControls.map((c) => ref(c.value));*/

console.log(controls2);

watch(controls2, (p1, p2) => console.log(p1, p2), { immediate: true });
// watch(
//   controls,
// watch(
//   controls,
//   (control, prevcontrol) => {
//     control.forEach((c, i) => {
//       console.log(prevcontrol?.[i].value && c.value === prevcontrol?.[i].value);
//       // if (c.value !== prevcontrol[i].value) {
//       //   console.log("changed", [c.type, c.value !== prevcontrol[i].value]);
//       // }
//     });
//   },
//   { immediate: true }
// );

// debouncedWatch(
//   controls.map((c) => c.value),
//   (controlsValues, prevControlsValues) => {
//     controlsValues.forEach((controlsValue, i) => {
//       if (controlsValue !== prevControlsValues[i]) {
//         const c = controls[i];
//         if (c.control === "slider") {
//           const message = {
//             channel,
//             type: c.type,
//             value: controlsValue,
//             userid: userId.value,
//             username: userName.value,
//           };
//           sendMessage(message);
//         }
//       }
//     });
//   },
//   { deep: true, debounce: 200 }
// );
</script>

<template>
  <div>
    <div v-for="(c, i) in controls" :key="i">
      <Title small v-if="c.title">{{ c.title }}</Title>
      <div class="tracking-wide text-gray-500">{{ c.description }}</div>
      <input
        v-if="c.control === 'slider'"
        type="range"
        v-model="controls2[0]"
        :min="c.min"
        :max="c.max"
        :step="c.step"
        class="w-full accent-green-400"
      />
      <div v-if="c.labels" class="flex justify-between tracking-wide">
        <div v-for="label in c.labels" :key="label" class="tracking-wide">
          {{ label }}
        </div>
      </div>
    </div>
  </div>
</template>
