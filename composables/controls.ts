import { autoType } from "d3";

export const parseControls = (controlsConfig: string) => {
  if (!controlsConfig) return null;
  const controls = String(controlsConfig).split(/\n---\s*\n/g);
  if (controls.length < 1) return null;

  return controls
    .map((chunk) =>
      chunk
        .split("\n")
        .map((row) => (row || "").trim())
        .filter((row) => row)
        .map((row) => {
          const s = row.split(/:\s*(.+)/).filter((r) => r);
          return s;
        })
    )
    .map((chunk) => {
      return autoType(Object.fromEntries(chunk));
    })
    .map((chunk: any) => {
      if (!chunk) {
        return;
      }
      return {
        control: chunk.control === "text" ? "text" : "slider",
        title: "",
        description: "",
        min: 0,
        max: chunk.max > chunk.min ? chunk.max : 10,
        step: "any",
        ...chunk,
        value: chunk.control === "text" ? "" : chunk.value ? chunk.value : 0,
        labels: chunk.labels
          ? chunk.labels.split(",").map((l) => l.trim())
          : null,
      };
    });
};
