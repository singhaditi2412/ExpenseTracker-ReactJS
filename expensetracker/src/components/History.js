import React from "react";

const History = ({ transaction }) => {
  const sign = transaction.price < 0 ? "-" : "+";
  return (
      <li className={transaction.price < 0 ? "negative" : "positive"}>
        {transaction.text}
        <span>
          {sign}${Math.abs(transaction.price)}
        </span>
      </li>
  );
};
export default History;
