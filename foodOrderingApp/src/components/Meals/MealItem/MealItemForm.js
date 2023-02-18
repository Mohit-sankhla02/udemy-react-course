import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from './MealItemForm.module.css'
const MealItemForm = (props) => {

    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] =  useState(true);


    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        else {
            setAmountIsValid(true);
            props.onAddToCart(enteredAmountNumber);
        }
    }  
    
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef} input={{type: 'number',  id: 'amount_' + props.id, min: '1', max: '5', step: '1', defaultValue: '1'}} label="Amount" />
        <button type="submit">+ Add</button>
        {!amountIsValid && <p>Please Enter a valid amount (1-5).</p>}
    </form>
};

export default MealItemForm;