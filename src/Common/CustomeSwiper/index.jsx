import React from 'react'
// swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// my style
import './CustomeSwiper.css';

// icons
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi'

export default function CustomeSwiper({ title_light, title_bold, swiper_discreption, slides, customeClassesList }) {
    return (
        <div className={`${customeClassesList ? customeClassesList : ""} p-md-5 p-3`}>
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-4 col-12">
                        <p className="fs-6 mb-0">{title_light}</p>
                        <h3 className='fs-2 fw-bold'>{title_bold}</h3>
                    </div>
                    <div className="col-md-6 col-12">
                        {swiper_discreption}
                    </div>
                    <div className="col-md-2 d-md-block d-none ">
                        <button className={`fs-2 swiper-prev prev-${title_bold} mr-3`}><HiOutlineArrowNarrowLeft /></button>
                        <button className={`fs-2 swiper-next next-${title_bold}`} ><HiOutlineArrowNarrowRight /></button>
                    </div>
                </div>

                <Swiper
                    slidesPerView={"auto"}
                    modules={[Navigation , Autoplay]}
                    spaceBetween={30}
                    navigation={{
                        prevEl: `.prev-${title_bold}`,
                        nextEl: `.next-${title_bold}`,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}                >
                    {slides.map(el => {
                        return (
                            <SwiperSlide key={Math.random()}>
                                {el}
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
        </div>
    )
}
