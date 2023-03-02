import React, { useContext } from "react";
import "./TotalBalance.css";
import { GlobalContext } from "../../context/Context";

const TotalBalance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions?.map((transaction) => transaction.price);
  const total = amount.reduce((acc, item) => (acc += item), 0);

  const truncateAmount = (total) => {
    if (total <= 10000000) {
      return total.toFixed(2);
    } else {
      return (total / 10000000).toFixed(2);
    }
  };
  return (
    <div className="total-balance">
      <h3>YOUR BALANCE</h3>
      <h1>${truncateAmount(total)}</h1>
    </div>
  );
};
export default TotalBalance;
