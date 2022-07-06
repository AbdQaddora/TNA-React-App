import React, { useState } from 'react'
import BtnBlack from '../../../../Common/BtnBlack';
import CustomeInput from '../../../../Common/CustomeInput';
import { useModalContext } from '../../../../Common/Modal';
import UploadFile from '../../../../Common/UploadFile';

export default function ServicesForm() {

  const { setModalText, openModal } = useModalContext();
  const [formData, setFormData] = useState({
    name: { value: "", error: false },
    email: { value: "", error: false },
    phone: { value: "", error: false },
    serivce: { value: "", error: false },
    message: { value: "", error: false },
    file: { value: "", error: false },
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
        serivce: formData.serivce.value,
        message: formData.message.value,
        file: formData.file.value
      }
      console.log(result);
    }
  }

  const checkFormData = () => {
    const { phone, file } = formData;
    if (isNaN(phone.value)) {
      setFormData(prev => {
        return { ...prev, phone: { value: "", error: true } }
      })
      return false;
    } else if (file.value !== "" && !file.value.endsWith('.pdf')) {
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
      serivce: { value: "", error: false },
      message: { value: "", error: false },
      file: { value: "", error: false },
    });
  }


  return (
    <form className='bg-white p-lg-5 p-3 needs-validation' onSubmit={sendData}>
      <p className='fs-4'>Get A Quote</p>
      <CustomeInput type="text" label="Name" value={formData.name.value}
        onChange={handelChange} name="name" isRequired={true} error={formData.name.error} />

      <CustomeInput type="email" label="Email Address" value={formData.email.value}
        onChange={handelChange} name="email" isRequired={true} error={formData.email.error} />

      <CustomeInput type="text" label="Phone Number" value={formData.phone.value}
        onChange={handelChange} name="phone" isRequired={true} error={formData.phone.error} />

      <CustomeInput type="text" label="Serivce" value={formData.serivce.value}
        onChange={handelChange} name="serivce" isRequired={true} error={formData.serivce.error} />

      <CustomeInput type="text" label="Message" value={formData.message.value}
        onChange={handelChange} name="message" isRequired={true} error={formData.message.error} />


      <p className='fs-6 mt-3'>Upload file <span className='text-primary'>(Optional)</span></p>
      <span className={`fs-6 ${wrongInFileFormat ? "text-danger" : "text-primary"}`}>(File should be in pdf format)</span>

      <div className="d-flex mb-3">
        <UploadFile accept=".pdf" onChange={handelChange} error={formData.file.error} name="file" />
        <BtnBlack>Send</BtnBlack>
      </div>
    </form>
  )
}
