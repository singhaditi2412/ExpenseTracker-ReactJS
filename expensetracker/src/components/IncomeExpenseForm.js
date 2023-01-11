import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";

const IncomeExpenseForm = () => {
  const {transactions} = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.price);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
  const expense = (
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );
  return (
    <div className="income-expense-form">
      <div className="income">
        <h3>INCOME</h3>
        <p className="income-money">{income}</p>
      </div>
      <div className="middle-border"></div>
      <div className="expense">
        <h3>EXPENSE</h3>
        <p className="expense-money">{expense}</p>
      </div>
    </div>
  );
};
export default IncomeExpenseForm;
