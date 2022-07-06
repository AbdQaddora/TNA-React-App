import React from 'react'
// nanoid
import { nanoid } from 'nanoid'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper'

// style
import 'swiper/css';
import 'swiper/css/navigation';

// icons
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi'
export default function ServicesSwiper({ slides }) {
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                modules={[Navigation]}
                spaceBetween={30}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
            >
                {slides.map(el => {
                    return (
                        <SwiperSlide key={nanoid()}>
                            <img src={el} alt="slide" className='img-fluid bg-white' />
                        </SwiperSlide>)
                })}

            </Swiper>
            <div className="d-flex justify-content-center">
                <button className="fs-2 swiper-prev prev"><HiOutlineArrowNarrowLeft /></button>
                <button className="fs-2 swiper-prev next ml-2" ><HiOutlineArrowNarrowRight /></button>
            </div>
        </>
    )
}
