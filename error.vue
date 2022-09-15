<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="h-screen min-h-screen flex-col md:flex">
    <!-- TODO: Move Body classes to script setup? -->
    <Body class="bg-black text-gray-50 antialiased transition-colors" />
    <Nav />
    <Stack class="h-full p-4 md:p-6">
      <Title>Error</Title>
      <div class="whitespace-pre-wrap font-mono text-gray-500">{{ error }}</div>
      <Button @click="handleError">Back to frontpage</Button>
    </Stack>
    <div class="pointer-events-none fixed inset-0 border border-gray-700" />
  </div>
</template>
