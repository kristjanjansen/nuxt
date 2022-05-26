<template>
  <Body class="min-h-screen text-primary bg-secondary subpixel-antialiased" />
  <div class="p-10">
    <NuxtLink to="/">index</NuxtLink>
    <NuxtLink to="/second">second</NuxtLink>
    <div>
      <Color />
      <slot />
    </div>
    <div class="fixed inset-0 border-4 border-primary pointer-events-none" />
  </div>
</template>
