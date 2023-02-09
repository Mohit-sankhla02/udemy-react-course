import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card'
import Modal from '../UI/Modal';
import styles from './UserForm.module.css'
const UserForm = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();
    const usernameHandler = (event) => {
        setUsername(event.target.value)
    }

    const ageHandler = (event) => {
        setAge(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Invalid Input", 
                message: "Plese Enter a valid name and age (Non-empty)" 
            });
            return;
        }

        if (+age < 1) {
            setError({
                title: "Invalid Age", 
                message: "Plese Enter a valid age (> 0)" 
            });
            return;
        }

        const userDetails = {
            id: (Math.random() * 1000).toString(),
            username: username,
            age: age
        };

        props.onCreateUser(userDetails);
        setUsername('');
        setAge('');
    }

    const errorHandler = () => {
        setError(null);
    }

    return <>
        {error && <Modal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card>
            <form onSubmit={submitHandler} className={styles.userForm}>
                <label htmlFor="username">Username</label>
                <input type="text" onChange={usernameHandler} value={username} />
                <label htmlFor="age">Age (Years)</label>
                <input type="number" onChange={ageHandler} value={age} />

                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    </>
}

export default UserForm;
