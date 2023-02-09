import React from 'react'
import UsersList from './UsersList.js';
import Card from '../UI/Card.js';
const Users = (props) => {
    return <Card>
        <UsersList users={props.users}/>
    </Card>
}

export default Users;
