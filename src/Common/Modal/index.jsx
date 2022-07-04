import React, { useState, createContext, useContext } from 'react'
// css
import './modal.css'
const ModalContext = createContext(null);
export default function Modal() {
    const { showModal, modalText, closeModal } = useContext(ModalContext);
    return (
        <div className={`modal-overlay ${showModal ? "d-flex" : "d-none"} justify-content-center align-items-center`}>
            <div className='my-modal text-center p-5 rounded'>
                <p className="fs-3 ">Thank You!</p>
                <p className="fs-5 ps-5 pe-5">
                    {modalText}</p>
                <button className='btn my-btn-2 text-white rounded-pill fs-5 mt-2' onClick={closeModal}>OK</button>
            </div>
        </div>
    )
}

export const useModalContext = () => {
    return useContext(ModalContext);
}

export const ModalContextProvider = ({ children }) => {
    const [modalText, setModalText] = useState("");
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <ModalContext.Provider value={{ showModal, modalText, setModalText, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    )
}






