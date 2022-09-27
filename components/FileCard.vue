<script setup lang="ts">
type Props = {
  file: any;
};
const { file } = defineProps<Props>();

const data =
  file.filetype === "video" && file.end_at
    ? {
        date: formatDate(file.start_at),
        start: formatDatetimePrecise(file.start_at),
        end: formatDatetimePrecise(file.end_at),
        duration: file.duration_formatted,
        streamkey: file.streamkey,
      }
    : {
        filename: file.filename,
        filetype: file.filetype,
        date: formatDatetime(file.modified_at),
      };

const { theme } = useTheme();
</script>

<template>
  <Card
    class="flex flex-col justify-between overflow-clip !rounded p-0 transition"
    :class="['hover:brightness-110', 'hover:brightness-90'][theme]"
  >
    <img
      v-if="file.filetype === 'image'"
      :src="file.src"
      class="aspect-video w-full object-cover"
    />
    <video
      v-if="file.filetype === 'video'"
      :src="file.src"
      controls
      class="aspect-video w-full"
    />
    <div
      v-if="file.filetype === 'audio'"
      class="grid aspect-video w-full place-content-center bg-gray-900"
    >
      <audio
        :src="file.src"
        controls
        :class="['invert', ''][theme]"
        controlsList="nodownload"
      />
    </div>
    <div v-if="file.filetype === 'unknown'" class="aspect-video bg-gray-900" />
    <Data :data="data" class="p-4" />
  </Card>
</template>
