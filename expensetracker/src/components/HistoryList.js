import React, { useContext } from "react";
import History from "./History";
import { GlobalContext } from "../context/Context";

export const HistoryList = () => {
  const { expenseData } = useContext(GlobalContext);
  const transactions = expenseData.transactions;
  return (
    <div className="history">
      <h3 className="history-heading">
        History
        <hr />
      </h3>
      <ul className="history-list">
        {transactions &&
          transactions.map((transaction) => (
            <History key={transaction.id} transaction={transaction} />
          ))}
      </ul>
    </div>
  );
};
