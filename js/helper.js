import { CURRENCY_UNIT, LANG } from "./config";

export const formatCurrency = (value) =>
  new Intl.NumberFormat(LANG, {
    style: "currency",
    currency: CURRENCY_UNIT,
  }).format(value);

export const calculateTotalPrice = (cart) => {
  return formatCurrency(cart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0));
}
export const calculateDiscount = (product) => {
 return formatCurrency(product.price - (product.price * product.discount) / 100);
}