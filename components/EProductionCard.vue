<!-- @TODO: Should this be added to components page -->
<script setup lang="ts">
type Props = {
  project: any;
};

const { project } = defineProps<Props>();
const { lang } = useLang();
</script>
<template>
  <ECard :thumbnail="project.thumbnail">
    <template #header>
      <ETitle el="h3" size="lg">{{ project.titles[0] }}</ETitle>
      <h6 v-if="project.authors" v-html="project.authors" />
    </template>
    <!-- ETODO: Bring back the next event -->
    <!-- <template #footer>
      <p v-if="nextEvent">Järgmine etendus:</p>
      <time v-if="nextEvent" :datetime="nextEvent.startAt">
        {{ nextEvent.startAt }}
      </time>
    </template> -->
  </ECard>
</template>
<style scoped>
.ECard footer,
.ECard header h6 {
  font-size: var(--text-xs);
  font-family: var(--font-mono);
  text-transform: uppercase;
}
.ECard header h3 {
  margin-bottom: var(--m-2);
}
.ECard footer {
  justify-content: space-between;
}
.ECard footer p {
  margin-right: 0.6em;
}
</style>
