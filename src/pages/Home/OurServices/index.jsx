import React from 'react'
// react router
import { Link } from 'react-router-dom'

// data
import data from '../servicesData'
// icons
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

// css
import './ourServices.css'
export default function OurServices() {
    return (
        <div className='mt-5 mb-5'>
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-3 col-12">
                        <p className="fs-6 mb-0 text-uppercase">We Make  the Future</p>
                        <h3 className='fs-2 fw-bold text-uppercase'>Our  Services</h3>
                    </div>
                    <div className="col-md-8 col-12 swiper-description">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat invidunt ut labore et dolore magna aliquyam erat
                    </div>
                </div>
                <div className="row g-3">
                    {data.map(el => {
                        const { icon, name, description } = el;
                        return (
                            <div className='col-md-4  col-sm-6 service-card' key={el.name}>
                                <div className='bg-white p-4'>
                                    <img src={icon} alt={name} />
                                    <h5 className="card-title mb-2 mt-2 text-uppercase">{name}</h5>
                                    <p className="card-disc max-lines-3">
                                        {description}
                                    </p>
                                    <Link to={`/services/${name}`}>
                                        <HiOutlineArrowNarrowRight className='fs-3' />
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}
