export const getUnit = (unit: string) => {
  if (unit === "kg") {
    return "x kg";
  }
  if (unit === "g") {
    return "x 100g";
  }
  return "x 1";
};

export const isStoreOpen = () => {
  const today = new Date().getDay();
  return today === 1 || today === 4;
};
