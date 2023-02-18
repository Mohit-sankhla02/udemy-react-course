import React, { useContext } from 'react'
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem/CartItem'
import classes from './Cart.module.css';
import { Scrollbar } from 'smooth-scrollbar-react';
const Cart = props => {
    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.totalAmount.toFixed(2);

    const hasItems = cartCtx.items.length > 0;

    const cartItemAddHandler = (item) => {};

    const cartItemRemoveHandler = (id) => {};

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => <li><CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}/></li>)}
        </ul>    
    )

    return <Modal onCloseCartHandler={props.onHideCart}>
        <Scrollbar>
            {cartItems}
        </Scrollbar>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>₹{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
}

export default Cart;