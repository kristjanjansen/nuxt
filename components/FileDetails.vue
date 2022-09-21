<script setup lang="ts">
type Props = {
  file: any;
};
const { file } = defineProps<Props>();
</script>

<template>
  <div
    class="grid items-center font-mono text-sm text-grey-200 md:grid-cols-3 md:gap-8"
  >
    <div>
      <div v-if="!file.start_at_formatted && file.modified_at_formatted">
        {{ file.modified_at_formatted }}
      </div>
      <div v-if="file.start_at_formatted">
        {{ file.start_at_formatted }}
      </div>
      <div v-if="file.end_at_formatted">
        {{ file.end_at_formatted }}
      </div>
    </div>
    <!-- <div v-if="file.start_at">
      {{ formatLongDatetime(file.end_at) }}
    </div>
    <div v-if="file.duration">{{ file.duration }}</div> -->
    <div v-if="file.duration">{{ file.duration_formatted }}</div>
    <div v-if="file.streamkey">{{ file.streamkey }}</div>
  </div>
</template>
