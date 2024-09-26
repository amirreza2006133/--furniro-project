import { CURRENCY_UNIT, LANG } from "./config";

export const formatCurrency = (value) =>
  new Intl.NumberFormat(LANG, {
    style: "currency",
    currency: CURRENCY_UNIT,
  }).format(value);
