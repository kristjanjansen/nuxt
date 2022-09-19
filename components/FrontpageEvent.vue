<script setup lang="ts">
type Props = {
  event: any;
};
const { event } = defineProps<Props>();
const { lang } = useLang();
</script>

<template>
  <div class="grid gap-4 p-4 md:grid-cols-[auto_1fr]">
    <Image
      class="pointer-events-none aspect-square h-32 w-32 rounded object-cover"
      :image="event.thumbnail"
    />
    <Stack>
      <div>
        <Title v-if="event.authors" small class="text-gray-500"
          >{{ event.authors }}
        </Title>
        <Title medium>{{ event.titles[lang] }}</Title>
      </div>
      <EventDatetime :event="event" />
      <Content :content="event.intros[lang]" />
      <Button primary :to="event.eventLink">
        {{ ["More info", "Lisainfo"][lang] }}
      </Button>
      <Button small to="/schedule" right>
        {{ [`See all upcoming events`, "Vaata kõiki tulevasi sündmusi"][lang] }}
      </Button>
    </Stack>
  </div>
</template>
