import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Widget from "../Widget";
import { closeModal as closeModalAction  } from "./slice";

import ModalStyle from './modal.module.css';

const Modal = ({children, className, closeClassName, modal_id }) => {
    const dispatch = useDispatch()
    const displayModal = useSelector(state => state.ui.modal)

    const closeModal = () => {
        dispatch(closeModalAction()) 
    }

    useEffect(() => {
        window.addEventListener('hashchange', closeModal)

        return () => window.removeEventListener('hashchange', closeModal)
    }, [])

    return (
        <Widget className={`${ModalStyle.modal} ${displayModal == modal_id ? 'd-block' : null} ${className}`}>
            <div className={ModalStyle.modal__backdrop} onClick={closeModal} />
            <div className={ModalStyle.modal__body}>
                <button className={`${ModalStyle.modal__close} ${closeClassName}`} onClick={closeModal} >X</button>
                {children}
            </div>
        </Widget>
    )
}


export default Modal;
