<template>
  <h3
    class="break-words font-title text-xl font-normal leading-snug text-grey-400 md:text-3xl [&>a]:underline"
    v-html="$slots.default()[0].children"
  />
</template>
