import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import cls from './Modal.module.css'

const Backdrop = props => {
    return(
        <div className={cls.backdrop} onClick={props.onCloseCart}/>
    )
}

const ModalOverlay = props => {
    return(
        <div className={cls.modal}>
            <div className={cls.content}>
                {props.children}
            </div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')

const Modal = props => {

    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart}/>, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    )
}

export default Modal