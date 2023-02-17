import React from 'react'
import classes from './Card.module.css'
const Card = (props) => {
    const derivedClasses = `${classes.card} ${props.className}`
    return <div className={derivedClasses}>{props.children}</div>
}

export default Card;