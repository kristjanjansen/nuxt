import columnify from "columnify";

export const formatData = (data, showHeaders = false) => {
  return columnify(data, {
    showHeaders,
    columnSplitter: "  ",
  });
};
