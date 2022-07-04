import React, { useState } from 'react'

// components
import CustomeInput from '../../../Common/CustomeInput';
import { useModalContext } from '../../../Common/Modal';

// email js
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const { setModalText, openModal } = useModalContext();
    const [formData, setFormData] = useState({
        name: { value: "", error: false },
        email: { value: "", error: false },
        phone: { value: "", error: false },
        message: { value: "", error: false },
    });

    const handelChange = (e) => {
        setFormData(prev => {
            return {
                ...prev, [e.target.name]: { value: e.target.value, error: false }
            }
        })
    }

    const sendData = (e) => {
        e.preventDefault();
        if (checkFormData()) {
            const result = {
                name: formData.name.value,
                email: formData.email.value,
                phone: formData.phone.value,
                message: formData.message.value,
            }
            setModalText(`We received your message`);
            openModal();
            sendDataViaEmail(result);
            emptyAllFields();
        }
    }

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const sendDataViaEmail = (data) => {
        emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            client_name: data.name,
            client_email: data.email,
            client_phone: data.phone,
            client_message: data.message,
        }, PUBLIC_KEY);
    }

    const emptyAllFields = () => {
        setFormData({
            name: { value: "", error: false },
            email: { value: "", error: false },
            phone: { value: "", error: false },
            message: { value: "", error: false },
        });
    }

    const checkFormData = () => {
        if (isNaN(formData.phone.value)) {
            setFormData(prev => {
                return {
                    ...prev, phone: { value: prev.phone.value, error: true }
                }
            })
            return false;
        }
        return true;
    }

    return (
        <form className="row" onSubmit={sendData}>
            <div className="col-md-6">
                {/* { type, label, onChange, value, name, isRequired, error } */}
                <CustomeInput type="text" label="Name" onChange={handelChange} value={formData.name.value}
                    name="name" isRequired={true} error={formData.name.error} />

                <CustomeInput type="text" label="Phone Number" onChange={handelChange} value={formData.phone.value}
                    name="phone" isRequired={true} error={formData.phone.error} />

            </div>
            <div className="col-md-6">
                <CustomeInput type="email" label="Email Address" onChange={handelChange} value={formData.email.value}
                    name="email" isRequired={true} error={formData.email.error} />

                <CustomeInput type="text" label="Message" onChange={handelChange} value={formData.message.value}
                    name="message" isRequired={true} error={formData.message.error} />
            </div>
            <div className="col-md-6">
                <button className='btn my-btn-2 text-white rounded-pill fs-5 mt-3'>Send</button>
            </div>
        </form>
    )
}
