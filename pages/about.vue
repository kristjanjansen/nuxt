<script setup lang="ts">
definePageMeta({
  layout: "elayout",
});

const { data: cards, error } = await useAboutPage();
const { lang } = useLang();
</script>

<template>
  <EError v-if="error" />
  <section v-else class="ContentBlocks">
    <template v-for="item in cards?.cards">
      <ETitle
        v-if="item.__component === 'content.title'"
        el="h2"
        size="lg"
        :title="item.titles?.[lang]"
      />
      <EAboutPageCard
        v-else-if="item.__component === 'content.about-card'"
        :layout="item.layout"
        :title="item.titles?.[lang] || item.name"
        :content="item.contents[lang]"
      />
      <RouterLink
        v-else-if="item.__component === 'content.related-page'"
        :to="'/page/' + item.title"
      >
        <ERelatedPageCard :title="item.titles?.[lang]" />
      </RouterLink>
      <EExternallinkCard
        v-else-if="item.__component === 'content.external-link'"
        :title="item.titles?.[lang]"
        :url="item.url"
      />
      <!--ETODO: Enable images -->
      <ETeamCard
        v-else-if="item.__component === 'content.person-card'"
        :thumbnail="
          item?.image
            ? {
                sizes: Object.values(item.image.formats),
                alt: item.image.alternativeText,
              }
            : undefined
        "
        :name="item.titles?.[lang] || item.name"
        :content="item.contents[lang]"
      />
      <EImageCard
        v-else-if="item.__component === 'content.image-card'"
        :image="item.image"
        :alt="item.image.alternativeText"
      />
    </template>
  </section>
</template>

<style scoped>
.ContentBlocks {
  display: flex;
  flex-direction: column;
  gap: var(--gap-5);
  padding: var(--p-4);
  margin-bottom: var(--m-12);
}
.ContentBlocks > h2 {
  grid-column: 1 / -1;
  margin-top: var(--m-8);
}
/* @TODO: Add breakpoints system */
@media only screen and (min-width: 600px) {
  .ContentBlocks {
    display: grid;
    grid-gap: var(--gap-5);
    grid-template-columns: repeat(2, 1fr);
  }
}
/* @TODO: Add breakpoints system */
@media only screen and (min-width: 1240px) {
  .ContentBlocks {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
