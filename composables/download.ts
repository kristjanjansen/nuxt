export const formatCSV = (data) => {
  return [
    Object.keys(data[0]).join(","),
    ...data.map((item) =>
      Object.values(item)
        .map((i) => `"${i}"`)
        .join(",")
    ),
  ]
    .join("\n")
    .replace(/(^\[)|(\]$)/gm, "");
};

export const downloadCSV = (data, filename) => {
  const csvContent = "data:text/csv;charset=utf-8," + formatCSV(data);
  const encodedData = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedData);
  link.setAttribute("download", filename);
  link.click();
};
