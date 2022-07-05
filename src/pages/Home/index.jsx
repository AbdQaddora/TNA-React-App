import React from 'react'
import OurClients from '../../Common/OurClients'
import AboutTNA from './AboutTNA'
import GallerySection from './GallerySection'
// css
import './home.css'
import Management from './ManagementSection'

export default function Home() {
    return (
        <div>
            {/* <img src="assets\images\top.svg" className="top-svg not-mobile" alt='top' /> */}
            <AboutTNA />
            <GallerySection />
            <Management />
            <OurClients />
        </div>
    )
}
