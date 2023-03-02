import React, { createContext, useReducer } from "react";
import ContextReducer from "./ContextReducer";

const defaultState = { transactions: [] };

const initialState =
  JSON.parse(localStorage.getItem("transactions")) || defaultState;

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ContextReducer, initialState);

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
