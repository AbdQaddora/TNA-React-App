import React from 'react'
import { Link } from 'react-router-dom'

// css
import './aboutTNA.css';
export default function AboutTNA() {
  return (
    <div className='about-tna mt-4 mb-4 container'>
      <div className="row g-md-5 g-3">
        <div className="col-md-6">
          <img src="assets/images/aboutTNA.png" alt="about TNA" className='about-tna-img img-fluid' />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center flex-shrink-1">
          <p className="fs-6 text-uppercase">Who we are</p>
          <h4 className="fs-4 fw-bold">About <span className="text-info">TNA</span></h4>
          <p className="fs-6">We consider ourselves a distinct mark in the field of offering advertising services since 1997 AD. We are offering our services for realizing the achievement after the other. Our experience and long-practice in our field helped us to realize a respectable position and an appropriate spread allowing us to serve many sectors inside the Kuwaiti market.</p>
          <button className='btn my-btn-2 width-fit-content rounded-pill fs-5 mt-3'>
            <Link to="/about" className='text-white text-decoration-none'>Read More.</Link>
          </button>
        </div>
      </div>

    </div>
  )
}
