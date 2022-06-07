<template>
  <h1
    class="break-words font-normal text-gray-300 font-title text-3xl leading-7"
    v-html="$slots.default()[0].children"
  />
</template>
