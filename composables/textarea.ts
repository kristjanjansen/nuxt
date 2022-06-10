import { Ref, ref, onMounted, onUnmounted } from "vue";

export function useTextarea(
  textarea: Ref<HTMLInputElement | null>,
  callback = () => {}
) {
  const onKeydown = async (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      callback();
      if (textarea.value) {
        textarea.value.style.height = "auto";
      }
    }
  };

  const onInput = (e) => {
    if (textarea.value) {
      // Around 6 rows
      if (textarea.value.scrollHeight < 245) {
        textarea.value.style.height = textarea.value.scrollHeight + "px";
      }
    }
  };

  onMounted(() => {
    if (textarea.value) {
      textarea.value.addEventListener("keydown", onKeydown);
      textarea.value.addEventListener("input", onInput);
    }
  });

  onUnmounted(() => {
    if (textarea.value) {
      textarea.value.removeEventListener("keydown", onKeydown);
      textarea.value.removeEventListener("input", onInput);
    }
  });

  return textarea;
}
