<script setup lang="ts">
const { find } = useStrapi3(); //

const { data, pending, refresh, error } = await useAsyncData("restaurant", () =>
  find<any>("events", { _limit: -1 })
);
</script>

<template>
  <div>
    <Test />
    <!-- <div v-for="event in data" class="prose">
      <h3>{{ event.title }}</h3>
      <br />
    </div> -->
  </div>
</template>
