<script setup lang="ts">
type Props = {
  event: any;
};
const { event } = defineProps<Props>();
const { lang } = useLang();
</script>

<template>
  <div class="grid gap-4 md:grid-cols-[auto_1fr]">
    <Image
      class="pointer-events-none aspect-square h-24 w-24 rounded object-cover"
      :image="event.thumbnail"
    />
    <Stack>
      <div>
        <Title v-if="event.authors" small class="text-grey-500"
          >{{ event.authors }}
        </Title>
        <Title medium>{{ event.titles[lang] }}</Title>
      </div>
      <EventDatetime :event="event" />
      <Content :content="event.intros[lang]" />
      <Button primary :to="event.eventLink">
        {{ ["More info", "Lisainfo"][lang] }}
      </Button>
      <slot />
    </Stack>
  </div>
</template>
