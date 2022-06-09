<script setup lang="ts">
import { useNow } from "@vueuse/core";
import { add } from "date-fns";

type Props = {
  event: any;
};
defineProps<Props>();
</script>

<template>
  <pre>
  {{ event.start_at }}
  {{ event.formattedStartAtDate }}
  {{ event.formattedStartAtTime }}
  {{ event.formattedStartAtDistance }}
  ---
  {{ event.end_at }}
  {{ event.formattedEndAtDate }}
  {{ event.formattedEndAtTime }}
  ---
  {{ event.urgency }}
  </pre>
</template>
