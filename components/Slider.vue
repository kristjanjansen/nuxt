<script setup lang="ts">
type Props = {
  modelValue?: number;
};

type Emits = {
  (e: "update:modelValue", value: number): void;
};

const { modelValue = "" } = defineProps<Props>();

const emit = defineEmits<Emits>();

const inputValue = computed({
  get: () => modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <input
    type="range"
    v-model.number="inputValue"
    class="slider my-3 block h-px w-full cursor-pointer appearance-none bg-green-500"
  />
</template>

<style scoped>
.slider::-webkit-slider-thumb {
  @apply h-4 w-4 appearance-none rounded-full bg-white transition active:bg-gray-300;
}
</style>
