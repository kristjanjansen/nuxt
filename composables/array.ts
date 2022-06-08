export function nearest(arr: number[], goal: number) {
  return arr.reduce((prev: number, curr: number) =>
    Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev
  );
}
