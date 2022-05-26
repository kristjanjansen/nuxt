<script setup lang="ts">
import { useCssVar } from "@vueuse/core";
const fg = useCssVar("--fg");
const bg = useCssVar("--bg");
const themes = {
  dark: { fg: "0 50% 98%", bg: "0 50% 5%" },
  light: { fg: "0 50% 2%", bg: "0 50% 98%" },
};
const changeTheme = (key) => {
  fg.value = themes[key].fg;
  bg.value = themes[key].bg;
};
</script>

<template>
  <div>
    <AccentButton v-for="(_, key) in themes" @click="changeTheme(key)">
      {{ key }}
    </AccentButton>
    <!-- 
    <div class="bg-fg/5 h-8" />
    <div class="bg-fg/10 h-8" />
    <div class="bg-fg/20 h-8" />
    <div class="bg-fg/25 h-8" />
    <div class="bg-fg/30 h-8" />
    <div class="bg-fg/40 h-8" />
    <div class="bg-fg/50 h-8" />
    <div class="bg-fg/60 h-8" />
    <div class="bg-fg/70 h-8" />
    <div class="bg-fg/75 h-8" />
    <div class="bg-fg/80 h-8" />
    <div class="bg-fg/90 h-8" />
    <div class="bg-fg/95 h-8" />
    <div class="bg-fg/100 h-8" /> -->
  </div>
</template>
