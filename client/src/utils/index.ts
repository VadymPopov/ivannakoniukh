export const formatEuro = (value: number) =>
  value.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
