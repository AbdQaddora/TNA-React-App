import React from 'react';
// css
import './contact.css'

// components
import Map from './Map'
import ContactForm from './ContactForm';

const OUR_LOCATION = { lat: 29.355181, lng: 47.956409 };
export default function Contact() {
  return (
    <div>
      <Map lat={OUR_LOCATION.lat} lng={OUR_LOCATION.lng} />
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-md-4 col-12">
            <h4 className='text-uppercase'>Contact Details</h4>
            <p className="fs-6">Block C Shuwaikh Industrial Area  13100 Kuwait</p>
            <p className="fs-6">info@tnaq8.com</p>
            <p className="fs-6">+965 2482 9995</p>
          </div>
          <div className="col-md-8 col">
            <h4 className='text-uppercase'>Send us a Message</h4>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
