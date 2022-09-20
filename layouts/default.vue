<template>
  <div class="h-screen min-h-screen flex-col md:flex">
    <!-- TODO: Move Body classes to script setup? -->
    <Body
      class="bg-black text-white antialiased transition-colors selection:bg-green-500 selection:text-[black]"
    />
    <Nav />
    <div class="relative h-full"><slot /></div>
    <div class="pointer-events-none fixed inset-0 border border-gray-700" />
    <UserDock />
  </div>
</template>
