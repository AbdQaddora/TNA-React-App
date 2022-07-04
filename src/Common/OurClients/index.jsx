import React from 'react'
// swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// my style
import './ourClients.css';

// data
import clientsData from './clientsData';

import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi'
export default function OurClients() {
    return (
        <div className='our-clients p-md-5 p-3'>
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-4 col-12">
                        <p className="fs-6 mb-0">Happy Customers</p>
                        <h3 className='fs-2 fw-bold'>Our Clients</h3>
                    </div>
                    <div className="col-md-6 col-12">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non numquam reiciendis accusantium quam consectetur ratione?
                    </div>
                    <div className="col-md-2 d-md-block d-none ">
                        <button className="fs-2 swiper-prev mr-3"><HiOutlineArrowNarrowLeft /></button>
                        <button className="fs-2 swiper-next" ><HiOutlineArrowNarrowRight /></button>
                    </div>
                </div>

                <Swiper
                    slidesPerView={"auto"}
                    modules={[Navigation]}
                    spaceBetween={50}
                    navigation={{
                        prevEl: '.swiper-prev',
                        nextEl: ".swiper-next",
                    }}
                >
                    {clientsData.map(el => {
                        return (
                            <SwiperSlide key={Math.random()}>
                                <img src={el} alt="client" />
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
        </div>
    )
}

