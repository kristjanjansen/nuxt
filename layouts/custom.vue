<template>
  <Body class="min-h-screen text-primary bg-secondary subpixel-antialiased" />
  <div class="p-10 flex flex-col gap-4">
    <NuxtLink to="/">index</NuxtLink>
    <NuxtLink to="/second">second</NuxtLink>
    <Color />
    <slot />
    <!-- <div class="fixed inset-0 border-4 border-primary pointer-events-none" /> -->
  </div>
</template>
