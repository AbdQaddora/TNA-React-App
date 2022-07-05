import React from 'react'
// react router
import { Navigate, useParams } from 'react-router'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// components
import PageTitle from '../../../Common/PageTitle';
import ServicesForm from './ServicesForm'

// style
import 'swiper/css';
import 'swiper/css/navigation';

// data
import servicesData from '../servicesData'

// icons
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi'

export default function Services() {
    const { servicesName } = useParams();
    const data = servicesData.find(el => el.name === servicesName);
    if (!data) {
        return <Navigate to="/error" />
    }
    return (
        <div>
            <PageTitle title={servicesName} />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <Swiper
                            slidesPerView={"auto"}
                            modules={[Navigation]}
                            spaceBetween={30}
                            navigation={{
                                prevEl: '.prev',
                                nextEl: '.next',
                            }}
                        >
                            {data.slides.map(el => {
                                return (
                                    <SwiperSlide>
                                        <img src={el} alt="slide" className='img-fluid bg-white' />
                                    </SwiperSlide>)
                            })}
                        </Swiper>
                        <div className="d-flex justify-content-center">
                            <button className="fs-2 swiper-prev prev"><HiOutlineArrowNarrowLeft /></button>
                            <button className="fs-2 swiper-prev next ml-2" ><HiOutlineArrowNarrowRight /></button>
                        </div>
                        <p className="fs-5 mt-5 mb-3">TNA design team is group of experts in advertising & branding field. Hold the key of architects & find the deep meanings of your slogan behind their door. Turn your ideas into 3D vision to
                        </p>
                        <h3 className="fs-md-5 fw-bold fs-6 text-uppercase">Lorem Ipsum is simply dummy text</h3>
                        <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam architecto aperiam, alias laudantium magni est eveniet, illum nam impedit explicabo omnis rem rerum, libero dolorem.</p>

                        <h3 className="fs-md-5 fw-bold  fs-6 text-uppercase mt-4">Lorem Ipsum is simply dummy text</h3>
                        <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam architecto aperiam, alias laudantium magni est eveniet, illum nam impedit explicabo omnis rem rerum, libero dolorem.</p>

                        <h3 className="fs-md-5 fw-bold fs-6 text-uppercase mt-4">Lorem Ipsum is simply dummy text</h3>
                        <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam architecto aperiam, alias laudantium magni est eveniet, illum nam impedit explicabo omnis rem rerum, libero dolorem.</p>

                        <h3 className="fs-md-5 fw-bold fs-6 text-uppercase mt-4">Lorem Ipsum is simply dummy text</h3>
                        <p className="fs-6 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam architecto aperiam, alias laudantium magni est eveniet, illum nam impedit explicabo omnis rem rerum, libero dolorem.</p>
                    </div>
                    <div className="col-md-4"><ServicesForm /></div>
                </div>
            </div>
        </div>

    )
}
