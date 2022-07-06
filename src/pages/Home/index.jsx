import React from 'react'
import OurClients from '../../Common/OurClients'
import AboutTNA from './AboutTNA'
import GallerySection from './GallerySection'
import Header from './Header'
// css
import './home.css'
import Management from './ManagementSection'
import OurServices from './OurServices'

export default function Home() {
    return (
        <div>
            <img src="assets\images\top.svg" className="top-svg d-none d-lg-block" alt='top' />
            <Header />
            <OurServices />
            <AboutTNA />
            <GallerySection />
            <Management />
            <OurClients />
        </div>
    )
}
