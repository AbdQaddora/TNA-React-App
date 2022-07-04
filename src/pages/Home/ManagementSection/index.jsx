import React from 'react'
import CustomeSwiper from '../../../Common/CustomeSwiper'

// Data
import data from './management';

// css
import './management.css'
export default function Management() {
    const slides = data.map(el => {
        return (
            <div className="management-card">
                <img src={el.img} alt={el.name} />
                <span className="text-info fs-7">{el.job_title}</span>
                <p className="fw-bold fs-5">{el.name}</p>
                <p className="fs-6">{el.discreption}</p>
            </div>
        )
    })
    return (
        <CustomeSwiper
            title_light="Keeping morale high "
            title_bold="Management"
            swiper_discreption="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non numquam reiciendis accusantium quam consectetur ratione?"
            slides={slides}
            customeClassesList="management"
        />)
}