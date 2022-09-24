<script setup lang="ts">
type Props = {
  data: any;
};
const { data } = defineProps<Props>();

const dataWithPath = computed(() => {
  const users = data.users.map((user) => {
    const path = polygonpath(user.messages.map((u) => [10, 10]));
    return { ...user, path };
  });
  return { ...data, users };
});
</script>

<template>
  <Code>{{ dataWithPath.users.map((u) => u.path) }}</Code>
</template>
