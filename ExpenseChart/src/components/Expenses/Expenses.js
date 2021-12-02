import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState('2020');

  function saveYearHandler(selectedYear) {
    setEnteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === enteredYear;
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={enteredYear}
          onSaveYear={saveYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
