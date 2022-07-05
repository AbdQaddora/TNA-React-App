import React from 'react'
import CustomeSwiper from '../../../Common/CustomeSwiper'

// import Gallery data
import GalleryData from '../../Gallery/GalleryData'

// css
import "./gallarySection.css"
export default function GallerySection() {
    const slides = GalleryData.map(el => <img src={el.img} alt={el.title} className="gallary-swiper-img" />)
    return (
        <div className="gallary-container-fluid">
            <CustomeSwiper
                title_light="MY WORKS"
                title_bold="Gallery"
                swiper_discreption="Lorem, ipsum dolor sit amet consectetur elit. hi Non numquam reiciendis accusantium quam consectetur ratione?"
                slides={slides}
                customeClassesList="gallary-swiper"
            />
        </div>
    )
}
