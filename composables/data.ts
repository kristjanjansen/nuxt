export const formatData = (data) => {
  const maxLength = Math.max(...Object.keys(data).map((k) => k.length));
  return Object.entries(data)
    .map(
      ([key, value]) =>
        `${(key + ":").padEnd(maxLength + 1)}  ${[value].flat().join(" ")}`
    )
    .join("\n");
};
