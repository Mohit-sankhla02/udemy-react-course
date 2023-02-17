import classes from './Modal.module.css'
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onCloseCartHandler}></div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>{props.children}</div>
}

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onCloseCartHandler={props.onCloseCartHandler}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
}

export default Modal;