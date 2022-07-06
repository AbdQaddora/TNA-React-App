import React from 'react'

// react router
import { Link } from 'react-router-dom';
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";
// style
import "swiper/css";
import "swiper/css/navigation";
import './header.css';

// data
import data from '../servicesData';
// icons
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
export default function Header() {
    return (
        <>
            <div className='container d-md-flex d-none'>
                <div className="row">
                    <div className="col-md-11">
                        <Swiper
                            modules={[Navigation]}
                            className="mySwiper"
                            navigation={{
                                prevEl: '.prev-header',
                                nextEl: '.next-header'
                            }}
                        >
                            {data.map(el => {
                                return (
                                    <SwiperSlide key={el.name}>
                                        <div className="row">
                                            <div className="col-md-6 d-flex flex-column justify-content-center">
                                                <h1 className="fs-1 fw-bold text-info text-uppercase">{el.name}</h1>
                                                <p className="fw-semibold text-uppercase">your tools in the fast track.</p>
                                                <p className="fs-6">{el.description}</p>
                                                <button className='btn my-btn-2 width-fit-content rounded-pill fs-5 mt-3'>
                                                    <Link to={`/services/${el.name}`} className='text-white text-decoration-none'>Read More.</Link>
                                                </button>
                                            </div>
                                            <div className="col-md-6">
                                                <img src={el.header_img} alt={el.name} className="img-fluid" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                    <div className="col-md-1 d-flex flex-column justify-content-center align-item-center">
                        <button className={`fs-2 swiper-next next-header mb-0`} ><HiOutlineArrowNarrowRight /></button>
                        <button className={`fs-2 swiper-prev prev-header`}><HiOutlineArrowNarrowLeft /></button>
                    </div>
                </div>
            </div>
            <div className='d-md-none d-block position-relative'>
                <img src="assets/images/Services/production_header_mobile.png" alt="mobile header" className='img-fluid header-img' />
                <div className="header_inner">
                    <h3 className="fs-3 fw-bold text-info text-uppercase">Design</h3>
                    <p className="fs-6 text-uppercase fw-bold">
                        Revolutionize your <br />
                        THOUGHTS & IDEAS</p>
                </div>
            </div>
        </>
    )
}
