import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";

const TotalBalance = () => {
  const { expenseData } = useContext(GlobalContext);

  const total = expenseData.income + expenseData.expense;
  return (
    <div className="total-balance">
      <h3>YOUR BALANCE</h3>
      <h1>${total}</h1>
    </div>
  );
};
export default TotalBalance;
