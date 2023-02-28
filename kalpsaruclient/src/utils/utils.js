import { convert } from "current-currency";
export const getINRPrice = async (amount) => {
  let INR_Amount = 0;
  await convert("USD", amount, "INR").then((res) => {
    INR_Amount = res.amount;
  });
  console.log(INR_Amount);
  return INR_Amount;
};

export const getUSDPrice = async (amount) => {
  let USD_Amount = 0;
  await convert("INR", amount, "USD").then((res) => {
    USD_Amount = res.amount;
  });
  return USD_Amount;
};
