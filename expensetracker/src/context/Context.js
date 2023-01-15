import React, { createContext, useReducer } from "react";
import ContextReducer from "./ContextReducer";

const defaultState = { expense: 0, income: 0, transactions: [] };

const initialState =
  JSON.parse(localStorage.getItem("expenseData")) || defaultState;

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
        expenseData: state,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
