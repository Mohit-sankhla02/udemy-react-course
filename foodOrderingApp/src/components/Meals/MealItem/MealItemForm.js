import React from "react";
import Input from "../../UI/Input";
import classes from './MealItemForm.module.css'
const MealItemForm = (props) => {
    return <form className={classes.form}>
        <Input input={{type: 'text',  id: 'amount_' + props.id, min: '1', max: '5', step: '1', defaultValue: '1'}} label="Amount" />
        <button>+ Add</button>
    </form>
};

export default MealItemForm;