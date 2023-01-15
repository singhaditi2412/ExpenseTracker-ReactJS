import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/Context";
import "./components.css";

const NewTransaction = () => {
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(false);
  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0 || price.length === 0) {
      setError(true);
      return;
    }

    const NewTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      price: parseInt(price),
    };
    addTransaction(NewTransaction);
    setPrice("");
    setText("");
  };

  return (
    <div className="new-transaction">
      <h3>
        Add new Transaction
        <hr />
      </h3>
      <form onSubmit={onSubmit}>
        <label>Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..."
        />
        {error && text.length <= 0 ? (
          <div className="error-label">Enter Text</div>
        ) : (
          ""
        )}
        <label>Amount</label>
        <label>(negative - expense, positive - income)</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter amount..."
        />
        {error && price.length <= 0 ? (
          <div className="error-label">Enter Amount</div>
        ) : (
          ""
        )}
        <button type="submit">Add transaction</button>
      </form>
    </div>
  );
};

export default NewTransaction;
