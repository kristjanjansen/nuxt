<template>
  <div class="flex h-screen min-h-screen flex-col">
    <Body class="bg-black text-gray-50 antialiased" />
    <Nav />
    <div class="h-full"><slot /></div>
    <div class="pointer-events-none fixed inset-0 border border-gray-700" />
  </div>
</template>
