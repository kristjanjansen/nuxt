export const useDraggables = (initialDraggables: any) => {
  const indexes = ref([]);

  const keys = Object.keys(initialDraggables);
  const draggables = keys.map((key) => {
    const x = ref(initialDraggables[key].x);
    const y = ref(initialDraggables[key].y);
    const updateIndex = () =>
      (indexes.value = unique([...indexes.value, key].reverse()).reverse());
    const updateXY = ({ x: newX, y: newY }) => {
      x.value = newX;
      y.value = newY;
      updateIndex();
    };
    const docked = ref(initialDraggables[key].docked || false);
    const setDocked = () => {
      docked.value = !docked.value;
      updateIndex();
    };
    const getIndex = () => {
      const index = indexes.value.findIndex((index) => index === key);
      return index > -1 ? index + 1 : "";
    };
    const getDocked = () => docked.value;
    return {
      ...initialDraggables[key],
      x,
      y,
      updateXY,
      setDocked,
      getDocked,
      getIndex,
    };
  });

  return Object.fromEntries(keys.map((key, i) => [key, draggables[i]]));
};
