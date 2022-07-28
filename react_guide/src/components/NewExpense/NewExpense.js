import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [button, setButton] = useState(false);

  const buttonHandler = () => {
    setButton(true);
  };

  const cancelHandler = () => {
    setButton(false);
  };

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setButton(false)
  };

  return (
    <div className="new-expense">
      {!button && <button onClick={buttonHandler}>Add New Expense</button>}
      {button && (
        <ExpenseForm
          onCancel={cancelHandler}
          onSaveExpenseData={onSaveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
