import React, { useContext } from "react";
import History  from "./History";
import { GlobalContext } from "../context/Context";

export const HistoryList = () => {
  const {transactions} = useContext(GlobalContext);
  return (
    <div> 
    <h3 className="history-heading">History
    <hr/>
    </h3>
    <ul className="history-list">
      {transactions.map((transaction) => (
        <History key={transaction.id} transaction={transaction} />
      ))}
    </ul>
    </div>
  );
};
