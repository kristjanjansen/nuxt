<script setup lang="ts">
definePageMeta({
  title: "Some Page",
});

const { data: currentProjects, error: currentError } = await useProjects({
  filters: { slug: { $notIn: ["signal", "kohe2022"] }, pinned: { $eq: true } },
});

const { data: pastProjects, error: pastError } = await useProjects({
  filters: { slug: { $notIn: ["signal", "kohe2022"] }, pinned: { $eq: false } },
});
const { lang } = useLang();

// ETODO: Consider bringing back
// :next-event="project.upcomingEvents && project.upcomingEvents[0].live && { startAt: project.upcomingEvents[0].formattedFromDatetime }"
</script>

<template>
  <EError v-if="currentError || pastError" />
  <div v-else class="Page">
    <ETitle size="lg" v-if="currentProjects.length > 0">
      {{ ["Projects", "Projektid"][lang] }}
    </ETitle>
    <br />
    <div class="projects">
      <template v-for="project in currentProjects">
        <NuxtLink :to="project.projectLink">
          <EProductionCard :project="project" />
        </NuxtLink>
      </template>
    </div>
    <ETitle size="lg" v-if="pastProjects.length > 0">
      {{ ["Past projects", "Varasemad projektid"][lang] }}
    </ETitle>
    <br />
    <div class="projects">
      <template v-for="project in pastProjects">
        <NuxtLink :to="project.projectLink">
          <EProductionCard :project="project" />
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<style scoped>
.Page {
  padding: var(--p-5);
}

.projects {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--gap-4);
}
@media only screen and (min-width: 600px) {
  .projects {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (min-width: 1000px) {
  .projects {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
