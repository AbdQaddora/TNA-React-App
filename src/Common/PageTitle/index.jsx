import React from 'react'
// icons
import { IoIosArrowDown } from 'react-icons/io';

export default function PageTitle({ title }) {
    return (
        <>
            <h1 className='text-uppercase text-center mb-0 mt-lg-3 mt-4'>{title}</h1>
            <h3 className='text-center'><IoIosArrowDown /></h3>
        </>
    )
}
