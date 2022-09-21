<script setup lang="ts">
import IconMuted from "~icons/radix-icons/speaker-off";
import IconUnmuted from "~icons/radix-icons/speaker-loud";
import { useMediaControls } from "@vueuse/core";

definePageMeta({
  layout: "elayout",
});

const { data: frontpage, error: frontpageError } = await useFrontPage();

const event = computed(() => {
  return frontpage.value?.events?.length ? frontpage.value.events[0] : null;
});

const video = ref<HTMLVideoElement | null>(null);

const { muted } = useMediaControls(video, {
  src: frontpage.value?.background.url || "",
});

onMounted(() => (muted.value = true));

const dialogState = ref(true);

const { lang } = useLang();
</script>

<template>
  <EError v-if="frontpageError" />
  <div v-else class="Page">
    <div class="videoWrapper" :class="{ dialogActive: dialogState }">
      <Transition>
        <ETitle
          v-if="!dialogState"
          size="lg"
          class="about"
          v-html="frontpage?.descriptions[lang]"
        />
      </Transition>
      <video ref="video" class="video" loop muted autoplay playsinline />
      <Transition>
        <button
          v-if="!dialogState"
          class="muteButton"
          @click.stop="muted = !muted"
        >
          <IconMuted v-if="muted" />
          <IconUnmuted v-if="!muted" />
        </button>
      </Transition>
      <EEventPreview
        v-if="dialogState && event"
        :dialog-state="dialogState"
        :event="event"
        :is-event="true"
        @close-dialog="dialogState = false"
      />
    </div>
  </div>
</template>

<style scoped>
.Page {
  position: relative;
}
.videoWrapper {
  /* @TODO: Add global navbutton size variable for consistency */
  height: calc(var(--app-height, 100vh) - var(--h-9) * 2);
  overflow-y: auto;
  display: grid;
  place-content: center;
  overflow-y: auto;
  padding: var(--p-3);
}
.videoWrapper.dialogActive > *:not(.EEventPreview) {
  filter: blur(8px);
  opacity: 0.6;
}
.about {
  position: absolute;
  top: 0;
  left: 0;
  /* @TODO: Add global gutter variables system for consistency */
  padding: var(--p-3);
  z-index: 1;
  color: var(--gray-300);
  /* mix-blend-mode: difference; */
}
@media only screen and (min-width: 600px) {
  .about {
    width: 33vw;
  }
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  touch-action: none;
}

.muteButton {
  position: absolute;
  left: var(--p-3);
  bottom: var(--p-3);
}

@media only screen and (min-width: 600px) {
  .about {
    padding: var(--p-5);
  }
  .videoWrapper {
    height: calc(var(--app-height, 100vh) - var(--h-9));
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
