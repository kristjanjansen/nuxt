<template>
  <div class="h-screen min-h-screen flex-col md:flex">
    <!-- TODO: Move Body classes to script setup? -->
    <Body
      class="bg-black antialiased transition-colors selection:bg-gray-800 selection:text-white"
    />
    <Nav />
    <div class="relative h-full"><slot /></div>
    <div class="pointer-events-none fixed inset-0 border border-gray-700" />
    <UserDock />
  </div>
</template>
