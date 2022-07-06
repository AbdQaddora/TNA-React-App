import React, { useState } from 'react'
// components
import CustomeInput from '../../Common/CustomeInput'
import PageTitle from '../../Common/PageTitle'
import UploadFile from '../../Common/UploadFile'
import BtnBlack from '../../Common/BtnBlack'

// context
import { useModalContext } from '../../Common/Modal'

export default function GetQuote() {
  const { setModalText, openModal } = useModalContext();

  const [formData, setFormData] = useState({
    name: { value: "", error: false },
    email: { value: "", error: false },
    phone: { value: "", error: false },
    designType: { value: "", error: false },
    quantity: { value: "", error: false },
    message: { value: "", error: false },
    file: { value: "", error: false }
  });
  const [wrongInFileFormat, setWrongInFileFormat] = useState(false);


  const handelChange = (e) => {
    setFormData(prev => {
      return ({ ...prev, [e.target.name]: { value: e.target.value, error: false } })
    })
  }

  const checkFormData = () => {
    const { phone, quantity, file } = formData;
    if (isNaN(phone.value)) {
      setFormData(prev => {
        return { ...prev, phone: { value: "", error: true } }
      })
      return false;
    } else if (isNaN(quantity.value)) {
      setFormData(prev => {
        return { ...prev, quantity: { value: 0, error: true } }
      })
      return false;
    } else if (file.value !== "" && !file.value.endsWith('.pdf')) {
      setWrongInFileFormat(true);
      return false;
    }
    return true;
  }

  const sendData = (e) => {
    e.preventDefault();
    if (checkFormData()) {
      const result = {
        name: formData.name.value,
        email: formData.email.value,
        phone: formData.phone.value,
        designType: formData.designType.value,
        message: formData.message.value,
        file: formData.file.value
      }
      console.log(result);
      setModalText("Your request is in Review. We will contact you soon!");
      openModal();
      emptyAllFields();
      setWrongInFileFormat(false);
    }
  }

  const emptyAllFields = () => {
    setFormData({
      name: { value: "", error: false },
      email: { value: "", error: false },
      phone: { value: "", error: false },
      designType: { value: "", error: false },
      quantity: { value: "", error: false },
      message: { value: "", error: false },
      file: { value: "", error: false }
    });
  }

  return (
    <div>
      <PageTitle title="Get a Quote" />
      <div className='fs-6 text-center container p-md-5 pt-2'>
        <p className='p-md-5 pt-0 pb-0'>TNA design team is group of experts in advertising & branding field. Hold the key of architects & find the deep meanings of your slogan behind their door. Turn your ideas into 3D vision to create your own project world. With TNA, Launch to rein yourself. Set your own ID to keep your special impression on your customers.</p>
      </div>
      <form className="container" onSubmit={sendData}>
        <div className="row gy-lg-5 gy-md-3 gy-1">
          <div className="col-lg-4 col-md-6">
            <CustomeInput type="text" label="Name" onChange={handelChange}
              value={formData.name.value} name="name" isRequired={true} error={formData.name.error} />
          </div>
          <div className="col-lg-4 col-md-6">
            <CustomeInput type="email" label="Email Address" onChange={handelChange}
              value={formData.email.value} name="email" isRequired={true} error={formData.email.error} />
          </div>
          <div className="col-lg-4 col-md-6">
            <CustomeInput type="text" label="Phone Number" onChange={handelChange}
              value={formData.phone.value} name="phone" isRequired={true} error={formData.phone.error} />
          </div>
          <div className="col-lg-4 col-md-6">
            <CustomeInput type="text" label="Type Of Design" onChange={handelChange}
              value={formData.designType.value} name="designType" isRequired={true} error={formData.designType.error} />
          </div>
          <div className="col-lg-4 col-md-6">
            <CustomeInput type="text" label="Quantity" onChange={handelChange}
              value={formData.quantity.value} name="quantity" isRequired={true} error={formData.quantity.error} />
          </div>
          <div className="col-lg-4 col-md-6">
            <CustomeInput type="text" label="Message" onChange={handelChange}
              value={formData.message.value} name="message" isRequired={true} error={formData.message.error} />
          </div>
          <div className="col-lg-4 col-md-6">

            <p className='fs-6'>Upload file <span className='text-primary'>(Optional)</span></p>
            <span className={`fs-6 ${wrongInFileFormat ? "text-danger" : "text-primary"}`}>(File should be in pdf format)</span>
            <div className="d-flex">
              <UploadFile accept=".pdf" onChange={handelChange} error={formData.file.error} name="file" />
              <BtnBlack>Apply</BtnBlack>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
