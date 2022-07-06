import React, { useState } from 'react'
import CustomeInput from '../../../../Common/CustomeInput'

// modal context
import { useModalContext } from '../../../../Common/Modal';
import UploadFile from '../../../../Common/UploadFile';
import BtnBlack from '../../../../Common/BtnBlack';

export default function JobForm() {
    const { setModalText, openModal } = useModalContext();
    const [formData, setFormData] = useState({
        name: { value: "", error: false },
        email: { value: "", error: false },
        phone: { value: "", error: false },
        job: { value: "", error: false },
        CV: { value: "", error: false },
    });

    const [wrongInFileFormat, setWrongInFileFormat] = useState(false);

    const handelChange = (e) => {
        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]: { value: e.target.value, error: false }
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
                job: formData.job.value,
                CV: formData.CV.value
            }
            console.log(result);
        }
    }

    const checkFormData = () => {
        const { phone, CV } = formData;
        if (isNaN(phone.value)) {
            setFormData(prev => {
                return { ...prev, phone: { value: "", error: true } }
            })
            return false;
        } else if (CV.value === "") {
            setFormData(prev => {
                return { ...prev, CV: { value: "", error: true } }
            })
            return false;
        } else if (!CV.value.endsWith('.pdf') && !CV.value.endsWith('.doc') && !CV.value.endsWith('.docx')) {
            console.log("");
            setWrongInFileFormat(true);
        } else {
            setModalText("Your Application is in review. We will contact you soon!");
            openModal();
            emptyAllFields();
            setWrongInFileFormat(false);
            return true;
        }
    }

    const emptyAllFields = () => {
        setFormData({
            name: { value: "", error: false },
            email: { value: "", error: false },
            phone: { value: "", error: false },
            job: { value: "", error: false },
            CV: { value: "", error: false },
        });
    }


    return (
        <form className='bg-white p-lg-5 p-3 needs-validation' onSubmit={sendData}>
            <p className='fs-4'>Apply To This Job</p>
            <CustomeInput type="text" label="Name" value={formData.name.value}
                onChange={handelChange} name="name" isRequired={true} error={formData.name.error} />

            <CustomeInput type="email" label="Email Address" value={formData.email.value}
                onChange={handelChange} name="email" isRequired={true} error={formData.email.error} />

            <CustomeInput type="text" label="Phone Number" value={formData.phone.value}
                onChange={handelChange} name="phone" isRequired={true} error={formData.phone.error} />

            <CustomeInput type="text" label="Job Name" value={formData.job.value}
                onChange={handelChange} name="job" isRequired={true} error={formData.job.error} />

            <p className='fs-5 mt-5'>Upload CV</p>
            <span className={`fs-6 ${wrongInFileFormat ? "text-danger" : "text-primary"}`}>(File should be in doc, .docx ,Pdf format)</span>
            <div className="d-flex">
                <UploadFile accept={".pdf,.doc,.docx"} onChange={handelChange} error={formData.CV.error} name="CV" />
                <BtnBlack>Apply</BtnBlack>
            </div>
        </form>
    )
}
