<script setup lang="ts">
import { useInterval } from "@vueuse/core";

const max = 200;
const step = 100;

const {
  counter: recharge,
  pause,
  resume,
  isActive: recharging,
} = useInterval(step, { controls: true });
pause();

const left = computed(() =>
  Math.floor(
    (recharging.value ? (max - recharge.value) * step : max * step) / 1000
  )
);
const clicks = ref(5);
const clicksStyle = computed(() => ({
  width: `${remap(clicks.value, 0, 5, 0, 100)}%`,
}));
const rechargeStyle = computed(() => ({
  width: `${remap(recharge.value, 0, max, 0, 100)}%`,
}));

const onClick = () => {
  clicks.value--;
  if (clicks.value === 0) {
    recharge.value = 0;
    resume();
  }
};
watch(recharge, () => {
  if (recharge.value >= max) {
    pause();
    recharge.value = 0;
    clicks.value = 5;
  }
});
</script>
<template>
  <Stack class="p-4 md:p-6">
    {{ recharge }}
    <Button @click="recharge = 0"></Button>
    <div class="relative inline-flex overflow-hidden rounded">
      <Button
        class="cursor-default border-neutral-300 bg-neutral-300 text-neutral-400 hover:border-neutral-300 hover:bg-neutral-300"
        @click="onClick"
      >
        Clics: {{ clicks }}
      </Button>
      <div
        class="pointer-events-none absolute top-0 bottom-0 left-0 bg-green-500 mix-blend-multiply"
        :style="clicksStyle"
      />
      <div
        class="pointer-events-none absolute bottom-0 left-0 h-1 bg-green-500 mix-blend-multiply"
        :style="rechargeStyle"
      />
    </div>
    When you use all your captures, you can capture again in {{ left }} s
  </Stack>
</template>
