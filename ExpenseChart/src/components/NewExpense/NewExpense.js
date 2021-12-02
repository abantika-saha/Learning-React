import React, { useState } from "react";

import ExpenseForm from './ExpenseForm'
import './NewExpense.css';


function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    function startEditingHandler(event){
        setIsEditing(true);
    }
    function stopEditingHandler(event){
        setIsEditing(false);
    }
    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>}
        </div>
    )
}

export default NewExpense;