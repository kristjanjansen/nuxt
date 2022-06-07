export const useVideocapture = (videoRef, canvasRef, width, height) => {
  const context = ref(null);
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
  };

  const getJpeg = () => {
    if (canvasRef.value) {
      return canvasRef.value.toDataURL("image/jpeg", 0.7);
    }
  };

  return { capture, getJpeg };
};
