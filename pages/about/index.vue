<script setup lang="ts">
const { data: cards, error } = await useAboutPage();

const colClass = {
  columns1: "col-span-2 md:col-span-1",
  columns2: "col-span-2",
  columns3: "col-span-3",
  columns4: "col-span-4 lg:grid lg:grid-cols-[1fr_3fr] gap-4",
};

const { lang } = useLang();
</script>

<template>
  <ErrorCard v-if="error" />
  <Stack class="p-4 md:p-6" v-else>
    <Link left to="/" />
    <div class="flex w-full grid-cols-1 flex-col gap-4 md:grid md:grid-cols-4">
      <template v-for="card in cards?.cards">
        <Title
          v-if="card.__component === 'content.title'"
          class="col-span-4 pt-6 first:pt-0"
        >
          {{ card.titles?.[lang] }}
        </Title>
        <a
          v-if="card.__component === 'content.external-link'"
          :href="card.url"
          target="_blank"
        >
          <Card
            class="aspect-video bg-green-400 transition-colors hover:bg-green-400 md:aspect-square"
            :class="[colClass[card.layout]]"
          >
            <Title medium class="!text-black">{{ card.titles?.[lang] }}</Title>
          </Card></a
        >
        <NuxtLink
          v-if="card.__component === 'content.related-page'"
          :to="'/page/' + card.title"
        >
          <Card
            class="aspect-video bg-green-400 transition-colors hover:bg-green-400 md:aspect-square"
            :class="[colClass[card.layout]]"
          >
            <Title medium class="!text-black">{{ card.titles?.[lang] }}</Title>
          </Card>
        </NuxtLink>
        <Card
          v-if="card.__component === 'content.about-card'"
          class="flex flex-col justify-between gap-2"
          :class="[colClass[card.layout]]"
        >
          <Title medium>{{ card.titles?.[lang] || card.name }}</Title>
          <Content medium :content="card.contents[lang]" />
        </Card>

        <Card
          v-if="card.__component === 'content.person-card'"
          class="flex aspect-square flex-col gap-2"
          :class="[colClass[card.layout]]"
        >
          <Title medium>{{ card.titles?.[lang] || card.name }}</Title>
          <Content medium :content="card.contents[lang]" />
        </Card>
      </template>
    </div>
  </Stack>
</template>
