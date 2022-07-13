import React from 'react'


import './header.css';

// data
import data from '../servicesData';

// components
import LargeScreenHeader from './LargeScreenHeader';
import MobileHeader from './MobileHeader';

export default function Header() {
    return (
        <>
            <LargeScreenHeader data={data} />
            <MobileHeader data={data} />
        </>
    )
}
