import React from 'react'

import './ourClients.css';

// data
import clientsData from './clientsData';
// components
import CustomeSwiper from '../CustomeSwiper';
export default function OurClients() {
    const slides = clientsData.map(el => <img src={el} alt="client" />)
    return (
        <CustomeSwiper
            title_light="Happy Customers"
            title_bold="Our Clients"
            swiper_description="Lorem, ipsum dolor sit amet consectetur elit. hi Non numquam reiciendis accusantium quam consectetur ratione?"
            slides={slides}
            customeClassesList="our-clients"
        />
    )
}

