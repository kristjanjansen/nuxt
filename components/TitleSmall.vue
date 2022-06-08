<template>
  <h2
    class="font-title text-lg leading-relaxed capsize"
    v-html="$slots.default()[0].children"
  />
</template>
