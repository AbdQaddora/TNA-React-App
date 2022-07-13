import React from 'react'
// react router
import { Link } from 'react-router-dom'
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// style
import "swiper/css";

export default function MobileHeader({ data }) {
    return (
        <div className='d-md-none d-block position-relative'>
            <Swiper
                slidesPerView={1}>
                {data.map(el => {
                    return (
                        <SwiperSlide>
                            <Link to={`/services/${el.name}`}>
                                <img src={el.header_img} alt={el.name} className='img-fluid header-img' />
                                <div className="header_inner">
                                    <h3 className="fs-3 fw-bold text-info text-uppercase">{el.name}</h3>
                                    <p className="fs-6 text-uppercase fw-bold text-dark">
                                        {el.description.split(" ").slice(0, 7).join(" ")}...
                                    </p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>)
}
