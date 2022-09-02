<script setup lang="ts">
type Props = {
  rows: object[];
};
const { rows } = defineProps<Props>();
</script>

<template>
  <table>
    <tbody>
      <tr v-for="row in rows">
        <td v-for="cell in Object.values(row)" class="px-2 align-top">
          {{ cell }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
