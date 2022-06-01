<template>
  <div>
    <Body class="min-h-screen bg-black text-white antialiased" />
    <Nav />
    <slot />
    <div class="border-fg pointer-events-none fixed inset-0 border border-2" />
  </div>
</template>
