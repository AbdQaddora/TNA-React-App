import React from 'react'
// css
import './pageNotFound.css'

export default function PageNotFound() {
    return (
        <div className='p-3'>
            <img src="assets\images\Error404.png" alt="" className='img-fluid d-block  m-auto' />
            <img src="assets\images\Line.png" alt="" className='img-fluid d-block  m-auto mb-3' />
            <p className='text-center mb-0'>The page you are looking for was moved, removed, </p>
            <p className='text-center'>renamed or might never existed.</p>
        </div>
    )
}
