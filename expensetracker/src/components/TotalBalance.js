import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";

const TotalBalance = () => {
  const {transactions}  = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.price);
  const total = amount.reduce((acc, item) => (acc += item), 0);
  return (
    <div className="total-balance">
      <h3>YOUR BALANCE</h3>
      <h1>${total}</h1>
    </div>
  );
};
export default TotalBalance;
