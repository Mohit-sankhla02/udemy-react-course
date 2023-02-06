import React, { useState } from "react";
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter.js'
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
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
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
    </Card>;

}

export default Expenses;
