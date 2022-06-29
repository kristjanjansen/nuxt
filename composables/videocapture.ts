export const useVideocapture = (videoRef, canvasRef, width, height) => {
  const context = ref<CanvasRenderingContext2D | null>(null);
  const canvasMultiplier = 1;
  const frames = ref([]);
  const frame = ref();

  watch([videoRef, canvasRef, width, height], () => {
    if (videoRef.value && canvasRef.value) {
      context.value = canvasRef.value.getContext("2d");
    }
    if (width.value && height.value && canvasRef.value) {
      canvasRef.value.width = (width.value || 1600) * canvasMultiplier;
      canvasRef.value.height = (height.value || 900) * canvasMultiplier;
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
    frame.value = {
      src: canvasRef.value.toDataURL("image/jpeg", 0.7),
      timestamp: performance.now(),
    };
    frames.value.push(frame.value);
  };

  return { context, capture, frame, frames };
};
