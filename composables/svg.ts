export const polygonpath = (
  points: [number, number][],
  closed: boolean = false
): string => {
  const [startX, startY] = points.shift() || [0, 0];
  const path = [
    "M",
    `${startX || 0},${startY}`,
    ...points.map(([x, y]) => `L ${x},${y}`),
    closed ? "Z" : "",
  ]
    .join(" ")
    .trim();
  return path;
};

export const translate = (
  x: number = 0,
  y: number = 0,
  unit?: "px" | "%"
): string => {
  return `translate(${x}${unit ?? ""}, ${y}${unit ?? ""})`;
};

export const scale = (
  scaleX: number = 1,
  scaleY?: number,
  unit?: "%"
): string => {
  return `scale(${scaleX}${unit ?? ""}, ${scaleY || scaleX}${unit ?? ""})`;
};
