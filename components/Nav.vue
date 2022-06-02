<script setup lang="ts">
import IconTheme from "~icons/radix-icons/half-2";

const { changeTheme } = useTheme();
const { lang, changeLang } = useLang();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-6">
    <NuxtLink to="/">
      <NavLink
        class="pt-2 font-normal lowercase !font-title !text-2xl capsize md:border-l"
      >
        eˉlektron
      </NavLink>
    </NuxtLink>
    <NuxtLink>
      <NavLink>{{ ["projects", "projektid"][lang] }}</NavLink>
    </NuxtLink>
    <NuxtLink>
      <NavLink>{{ ["podcast", "podcast"][lang] }}</NavLink>
    </NuxtLink>
    <button class="text-left" @click="changeLang">
      <NavLink>{{ ["en", "et"][lang] }}</NavLink>
    </button>
    <button class="text-left" @click="changeTheme">
      <NavLink><IconTheme /></NavLink>
    </button>
    <NavLink><Messages /></NavLink>
  </div>
</template>
