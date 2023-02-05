import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter.js'
import Card from "../UI/Card";
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterSelectionHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    return <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onSelectingFilter={filterSelectionHandler} />
        {filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} />
        ))}
    </Card>;

}

export default Expenses;
