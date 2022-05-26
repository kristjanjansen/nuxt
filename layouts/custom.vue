<template>
  <Body class="min-h-screen bg-bg text-fg subpixel-antialiased" />
  <div class="debug flex flex-col gap-4 p-10">
    <NuxtLink to="/">index</NuxtLink>
    <NuxtLink to="/second">second</NuxtLink>
    <Color />
    <slot />
    <!-- <div class="fixed inset-0 border-4 border-fg pointer-events-none" /> -->
  </div>
</template>

<style>
.debug > * {
  @apply border border-[red];
}
</style>
