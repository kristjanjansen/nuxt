<script setup lang="ts">
// const { find } = useStrapi3(); //

// // data, pending, refresh, error
// const { data: events } = await useAsyncData("events", () =>
//   find<any>("events", { _limit: -1 })
// );

// const a = await useAsyncData("hello", () => $fetch("/api/hello"));
import "./app.css";
</script>

<template>
  <div>
    <NuxtLayout name="main">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
