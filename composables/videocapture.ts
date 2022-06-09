export const useVideocapture = (videoRef, canvasRef, width, height) => {
  const context = ref<CanvasRenderingContext2D | null>(null);
  const canvasMultiplier = 1;

  watch([videoRef, canvasRef, width, height], () => {
    if (videoRef.value && canvasRef.value) {
      context.value = canvasRef.value.getContext("2d");
    }
    if (width.value && height.value) {
      canvasRef.value.width = width.value * canvasMultiplier;
      canvasRef.value.height = height.value * canvasMultiplier;
    }
  });

  const capture = () => {
    if (videoRef.value && canvasRef.value) {
      context.value.drawImage(
        videoRef.value,
        0,
        0,
        width.value * canvasMultiplier,
        height.value * canvasMultiplier
      );
    }
    frame.value = canvasRef.value.toDataURL("image/jpeg", 0.7);
    frames.value.push(frame.value);
  };

  const frames = ref([]);
  const frame = ref(null);

  return { context, capture, frame, frames };
};
