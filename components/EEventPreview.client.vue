<!-- @TODO: Move to Elektro -->
<script setup lang="ts">
import IconArrowRight from "~icons/radix-icons/arrow-right";

type Props = {
  event: any;
  dialogState: boolean;
  isEvent: boolean;
};

const { event, isEvent } = defineProps<Props>();
const { lang } = useLang();

// ETODO: useUrgency
const urgency = ref("soon");

const label = computed(() => {
  if (isEvent && urgency.value === "soon") {
    return ["tulemas", "soon"][lang.value];
  } else if (isEvent && urgency.value === "now") {
    return ["live", "live"];
  } else {
    return ["new", "uus"][lang.value];
  }
});
const emit = defineEmits<{
  (e: "close-dialog"): void;
}>();
</script>

<template>
  <EDialog
    v-if="event"
    class="EEventPreview"
    :title="label"
    :dialog-state="dialogState"
    @close-dialog="emit('close-dialog')"
  >
    <aside>
      <header>
        <ETitle v-if="isEvent && event.formattedDistance" el="h6" size="sm">
          event.formattedDistance
        </ETitle>
        <ETitle el="h3" v-html="event.titles[lang]" />
        <EContent :content="event.intros[lang]" el="div" />
      </header>
      <footer>
        <EventButton v-if="isEvent" :event="event" />
        <template v-else>
          <NuxtLink :to="event.eventLink">
            <EButton size="xs" el="a" color="transparent">
              <IconArrowRight />
              {{ ["View project", "Vaata projekti"][lang] }}
            </EButton>
          </NuxtLink>
        </template>
      </footer>
    </aside>
    <EImage v-if="event?.thumbnail" :image="event.thumbnail" />
  </EDialog>
</template>

<style scoped>
.EEventPreview {
  position: relative;
  overflow: hidden;
  background-color: var(--bg);
  width: 100%;
  max-width: 40rem;
}
.EEventPreview :deep(article) {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
}
.EEventPreview .ETitle {
  margin-bottom: var(--m-3);
}
.EEventPreview aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--p-3);
  color: var(--gray-300);
}
.EEventPreview aside header {
  font-family: font-title-regular, sans-serif;
  font-size: var(--text-3xl);
}
.EEventPreview aside header p span {
  color: var(--gray-300);
  width: 42%;
  display: inline-block;
}
.EEventPreview aside footer {
  display: flex;
  gap: var(--gap-5);
}
.EEventPreview img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1;
}
.closeButton {
  position: absolute;
  right: var(--gap-2);
  top: var(--gap-2);
  z-index: 1;
  color: var(--gray-300);
}
.closeButton:hover {
  opacity: var(--opacity-60);
}

@media only screen and (min-width: 600px) {
  .EEventPreview :deep(article) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
