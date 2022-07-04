import React from 'react'
// css
import './whatsappBtn.css';
// icons    
import { ImWhatsapp } from 'react-icons/im'
const PHONE_NUMBER = 972599676231;
export default function WhatsappBtn() {
    return (
        <a href={`https://wa.me/${PHONE_NUMBER}`} className='whatsapp-btn d-flex justify-content-center align-items-center' target="_blank">
            <ImWhatsapp />
        </a>
    )
}
