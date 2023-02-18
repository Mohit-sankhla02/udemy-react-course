import React from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Dal Bati Churma',
        description: 'Nice and Fresh Batis and Churma',
        price: 140,
    },
    {
        id: 'm2',
        name: 'Pav Bhaji',
        description: '2 Pav with Bhaji',
        price: 60,
    },
    {
        id: 'm3',
        name: 'Chola Kulcha (Chappal)',
        description: '2 Chappal with unlimited chola',
        price: 65,
    },
    {
        id: 'm4',
        name: 'Paneer Roll',
        description: '4 Paneer Roll with 2 type of Chutney(Red and Green Chutney)',
        price: 200,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}></MealItem>);

    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
}

export default AvailableMeals;