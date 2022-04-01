import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";

const BudgetsContext = React.createContext();

export function useBugets() {
  return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);
  function getBudgetExpenses(budgetId) {
    return expenses, filter((expense) => expense.budgetId === budgetId);
  }
  function addExpense() {}
  function addBudget() {
    setBudgets((prevBudgets) => {});
  }
  function deleteBudget() {}
  function deleteExpense() {}
  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
};

//https://youtu.be/yz8x71BiGXg?t=1025
