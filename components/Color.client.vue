<script setup lang="ts">
import { useCssVar } from "@vueuse/core";
const primary = useCssVar("--primary");
const secondary = useCssVar("--secondary");
const themes = {
  dark: { primary: "255 255 255", secondary: "0 0 0" },
  light: { primary: "0 0 0", secondary: "255 255 255" },
};
const changeTheme = (key) => {
  console.log(key);
  primary.value = themes[key].primary;
  secondary.value = themes[key].secondary;
};
</script>

<template>
  <div>
    <AccentButton v-for="(_, key) in themes" @click="changeTheme(key)">
      {{ key }}
    </AccentButton>
    <!-- 
    <div class="bg-primary/5 h-8" />
    <div class="bg-primary/10 h-8" />
    <div class="bg-primary/20 h-8" />
    <div class="bg-primary/25 h-8" />
    <div class="bg-primary/30 h-8" />
    <div class="bg-primary/40 h-8" />
    <div class="bg-primary/50 h-8" />
    <div class="bg-primary/60 h-8" />
    <div class="bg-primary/70 h-8" />
    <div class="bg-primary/75 h-8" />
    <div class="bg-primary/80 h-8" />
    <div class="bg-primary/90 h-8" />
    <div class="bg-primary/95 h-8" />
    <div class="bg-primary/100 h-8" /> -->
  </div>
</template>
