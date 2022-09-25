import { autoType, extent, groups, max, min } from "d3";
import { add } from "date-fns";
import { stringToColor } from "./coords";

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

export const useControlsData = (controlsMessages, controls = null) => {
  return computed(() => {
    const messagesByType = groups(
      controlsMessages.value,
      (m: any) => m.type
    ).map(([typeKey, messages]) => {
      const control = controls?.value
        ? controls.value.filter((c) => c.type === typeKey)[0]
        : null;
      const [xDataMin, xDataMax] = extent(
        messages,
        (m) => new Date(m.datetime)
      );
      const xMin = xDataMin;
      // We make the maximum x scale "min time + 1min" or
      // max time when the data exceeds +1min
      const xMax = max([add(xDataMin, { minutes: 1 }), new Date(xDataMax)]);
      const [yDataMin, yDataMax] = extent(messages, (m) => m.value);
      const yMin = control?.min || yDataMin;
      const yMax = control?.max || yDataMax;
      const users = groups(messages, (m) => m.username)
        .map(([userKey, messages]) => {
          return {
            username: userKey || null,
            color: stringToColor(userKey || typeKey),
            messages,
          };
        })
        .filter((u) => u);
      return {
        type: typeKey,
        xDataMin,
        xDataMax,
        yDataMin,
        yDataMax,
        xMin,
        xMax,
        yMin,
        yMax,
        control,
        users,
      };
    });
    const xMin = min(messagesByType.map((t) => t.xMin));
    const xMax = max(messagesByType.map((t) => t.xMax));
    return messagesByType.map((t) => ({ ...t, xMin, xMax }));
  });
};
