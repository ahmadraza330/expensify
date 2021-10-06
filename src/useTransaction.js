import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";

import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/categories";

const useTransactions = (title) => {
  resetCategories();
  const { state } = useContext(ExpenseTrackerContext);
  const rightTransactions = state.filter((item) => item.type === title);
  const total = rightTransactions.reduce(
    (acc, item) => (acc += item.amount),
    0
  );

  const categories = title === "Income" ? incomeCategories : expenseCategories;

  console.log({ total, rightTransactions, categories });

  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
    if (category) category.amount += t.amount;
  });

  const filterdCategories = categories.filter((c) => c.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filterdCategories.map((c) => c.amount > 0),
        backgroundColor: filterdCategories.map((c) => c.color),
      },
    ],
    labels: filterdCategories.map((c) => c.type),
  };

  return { filterdCategories, total, chartData };
};

export default useTransactions;
