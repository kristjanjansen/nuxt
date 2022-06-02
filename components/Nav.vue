<script setup lang="ts">
import IconTheme from "~icons/radix-icons/half-2";

const nav = [
  {
    title: "Projects",
    to: "/projects",
  },
  {
    title: "Podcast",
    to: "/podcast",
  },
];
const { changeTheme } = useTheme();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-5">
    <NuxtLink to="/">
      <NavLink
        class="pt-2 font-normal lowercase !font-title !text-2xl capsize md:border-l"
      >
        eˉlektron
      </NavLink>
    </NuxtLink>
    <NuxtLink v-for="(n, i) in nav" :to="n.to">
      <NavLink>{{ n.title }}</NavLink>
    </NuxtLink>
    <button class="text-left" @click="changeTheme">
      <NavLink><IconTheme /></NavLink>
    </button>
    <NavLink><Messages /></NavLink>
  </div>
</template>
