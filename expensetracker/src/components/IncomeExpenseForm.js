import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";

const IncomeExpenseForm = () => {
  const { expenseData } = useContext(GlobalContext);
  return (
    <div className="income-expense-form">
      <div className="income">
        <h3>INCOME</h3>
        <p className="income-money">{expenseData.income}</p>
      </div>
      <div className="middle-border"></div>
      <div className="expense">
        <h3>EXPENSE</h3>
        <p className="expense-money">{expenseData.expense}</p>
      </div>
    </div>
  );
};
export default IncomeExpenseForm;
