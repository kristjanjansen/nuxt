<!-- <script setup lang="ts">
const { find } = useStrapi3(); //

const { data, pending, refresh, error } = await useAsyncData("restaurant", () =>
  find<any>("events", { _limit: -1 })
);

const config = useRuntimeConfig();
console.log(config);
</script>

<template>
  <div>
    <Test />
    <div v-if="pending" class="bg-red-500">Pending</div>
    <div v-for="event in data.slice(0, 2)" class="prose">
      <h3>{{ event.title }}</h3>
      <br />
    </div>
  </div>
</template> -->

<template>
  <div>
    <div>Check developer console!</div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
console.log("Runtime config:", config);
if (process.server) {
  console.log("API secret:", config.apiSecret);
}
</script>
