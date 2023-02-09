import React from 'react'
import styles from './UserItem.module.css';
const UserItem = (props) => {
    const returnString = `${props.name} (${props.age} years old)`;
    return <li className={styles.listItem}>
        {returnString}
    </li>
}

export default UserItem;
