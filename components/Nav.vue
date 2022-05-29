<script setup lang="ts">
import IconTheme from "~icons/radix-icons/half-2";

const nav = [
  {
    title: "Kava",
    to: "/",
  },
  {
    title: "Podcast",
    to: "/podcast",
  },
];
const { changeTheme } = useTheme();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-4">
    <NuxtLink v-for="(n, i) in nav" :to="n.to">
      <NavLink :class="[i === 0 ? 'md:border-l' : '']">{{ n.title }}</NavLink>
    </NuxtLink>
    <button class="text-left" @click="changeTheme">
      <NavLink><IconTheme /></NavLink>
    </button>
    <NavLink><Messages /></NavLink>
  </div>
</template>
