<script setup lang="ts">
import { useInterval } from "@vueuse/core";

type Emits = {
  (e: "click"): void;
  (e: "remaining", value: number): void;
};

const emit = defineEmits<Emits>();

const max = 200;
const step = 100;

const {
  counter: recharge,
  resume: startRecharge,
  pause: stopRecharge,
  isActive: recharging,
} = useInterval(step, { controls: true });

stopRecharge();

const remaining = computed(() =>
  Math.floor(
    (recharging.value ? (max - recharge.value) * step : max * step) / 1000
  )
);
watch(remaining, () => emit("remaining", remaining.value), { immediate: true });

const clicks = ref(5);
const clicksStyle = computed(() => ({
  width: `${remap(clicks.value, 0, 5, 0, 100)}%`,
}));
const rechargeStyle = computed(() => ({
  width: `${remap(recharge.value, 0, max, 0, 100)}%`,
}));

const onClick = () => {
  if (clicks.value > 0) {
    clicks.value--;
    emit("click");
  }
  if (clicks.value === 0) {
    recharge.value = 0;
    startRecharge();
  }
};
watch(recharge, () => {
  if (recharge.value >= max) {
    stopRecharge();
    recharge.value = 0;
    clicks.value = 5;
  }
});
</script>
<template>
  <div class="relative inline-flex overflow-hidden rounded">
    <Button
      class="cursor-default border-neutral-300 bg-neutral-300 text-neutral-400 hover:border-neutral-300 hover:bg-neutral-300"
      @click="onClick"
    >
      <slot />
    </Button>
    <div
      class="remaining-0 pointer-events-none absolute top-0 bottom-0 bg-green-500 mix-blend-multiply"
      :style="clicksStyle"
    />
    <div
      class="remaining-0 pointer-events-none absolute bottom-0 h-1 bg-green-500 mix-blend-multiply"
      :style="rechargeStyle"
    />
  </div>
</template>
