<script setup lang="ts">
//import type { Event } from "~/types";
//import { Strapi3Response } from "@nuxtjs/strapi";

const { find } = useStrapi3(); //

const { data, pending, refresh, error } = await useAsyncData("restaurant", () =>
  find<any>("events", { _limit: -1 })
);
</script>

<template>
  <div>
    <div v-if="pending" class="bg-red-500">Pending</div>
    <div v-for="event in data" class="prose">
      <h3>{{ event.title }}</h3>
      <br />
    </div>
  </div>
</template>
