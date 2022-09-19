<script setup lang="ts">
const router = useRouter();
setTimeout(() => router.push("/lab/components"), 1000);
</script>

<template>
  <div class="p-4 md:p-6"><Title>Going back...</Title></div>
</template>
