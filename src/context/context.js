import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransactions = (id) => {
    dispatch({ type: "DELETE_TRANSACTIONS", payload: id });
  };

  const addTransaction = (state) => {
    dispatch({ type: "ADD_TRANSATIONS", payload: state });
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransactions,
        addTransaction,
        state,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
