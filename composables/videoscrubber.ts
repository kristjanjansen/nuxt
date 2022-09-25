import {
  useElementSize,
  useMouseInElement,
  useMediaControls,
} from "@vueuse/core";
import { scaleLinear } from "d3";

export const useVideoScrubber = (video, container, svg) => {
  const { width } = useElementSize(container);
  const height = ref(25);

  const { elementX: scrubX } = useMouseInElement(svg);

  const { currentTime, duration } = useMediaControls(video);

  const xVideoScale = computed(() =>
    scaleLinear().domain([0, duration.value]).range([0, width.value])
  );

  const currentX = ref(0);

  watch([currentTime, width], () => {
    currentX.value = xVideoScale.value(currentTime.value);
  });

  const scrubbing = ref(false);

  const onScrub = () => {
    currentTime.value = xVideoScale.value.invert(scrubX.value);
  };

  const onMousedown = () => {
    scrubbing.value = true;
    onScrub();
  };
  const onMousemove = () => {
    if (scrubbing.value) {
      currentTime.value = xVideoScale.value.invert(scrubX.value);
    }
  };
  const onMouseup = () => {
    onScrub();
    scrubbing.value = false;
  };
  return { width, height, currentX, onMousedown, onMousemove, onMouseup };
};
