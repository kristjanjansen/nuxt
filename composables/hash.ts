// https://github.com/nuxt/framework/discussions/850

export const hash = (obj: Object) => {
  const input = JSON.stringify(obj);
  let seed: number | string = 0;
  for (let i = 0; i < input.length; i++) {
    seed = (seed << 5) - seed + input.charCodeAt(i);
    seed |= 0;
  }
  return seed.toString(16);
};
