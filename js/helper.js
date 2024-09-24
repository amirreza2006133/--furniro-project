import { CURRENCY_UNIT } from "./config";

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", {
    style: "currency",
    currency: CURRENCY_UNIT,
  }).format(value);
