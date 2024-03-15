export const getUnit = (unit: string) => {
   if (unit === "kg") {
     return "x kg";
   }
   if (unit === "g") {
     return "x 100g";
   }
   return "x 1";
};
