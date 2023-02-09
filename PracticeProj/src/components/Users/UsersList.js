import React from "react";
import UserItem from "./UserItem.js"
import styles from "./UsersList.module.css";
const UsersList = (props) => {
    return <ul className={styles.usersList}>
        {props.users.map(user => <UserItem
            key={user.id}
            name={user.username}
            age={user.age}
        />)
        }
    </ul>
}

export default UsersList;
