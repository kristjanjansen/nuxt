<template>
  <div>
    <Body class="min-h-screen bg-gray-100 text-gray-900 antialiased" />
    <Nav />
    <slot />
    <div class="border-fg pointer-events-none fixed inset-0 border border-2" />
    <DraggableChat />
  </div>
</template>
