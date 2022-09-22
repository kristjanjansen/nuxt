<script setup lang="ts">
import { useNow } from "@vueuse/core";
import { differenceInSeconds } from "date-fns";

type Props = {
  datetime: string;
};
const { datetime } = defineProps<Props>();
const now = useNow({ interval: 1000 });
const dateTo = computed(() =>
  differenceInSeconds(new Date(datetime), now.value)
);
</script>

<template>
  <div class="font-mono text-green-400">{{ dateTo }}s</div>
</template>
