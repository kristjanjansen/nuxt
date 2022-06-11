import { Ref } from "vue";

export function usePip(videoRef: Ref<HTMLVideoElement | null>) {
  const isPipAvailable =
    typeof document !== undefined && "pictureInPictureEnabled" in document;

  const isPip = ref(false);

  const enter = () => {
    if (isPipAvailable && videoRef?.value) {
      videoRef.value
        .requestPictureInPicture()
        .then(() => (isPip.value = true))
        .catch((e) => console.log(e));
    }
  };

  const exit = () => {
    if (isPipAvailable && videoRef?.value) {
      document
        .exitPictureInPicture()
        .then(() => (isPip.value = false))
        .catch((e) => console.log(e));
    }
  };

  const toggle = () => (isPip.value ? exit() : enter());

  return { isPipAvailable, isPip, enter, exit, toggle };
}
