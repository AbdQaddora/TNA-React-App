import React from 'react'
import OurClients from '../../Common/OurClients'
import PageTitle from '../../Common/PageTitle'
// css
import './about.css'
export default function About() {
  return (
    <div>
      <PageTitle title="About us" />
      <img src="assets/images/about.png" alt="about header" className='about-header-image mt-3 mb-5' />
      <div className="container">
        <p className="fs-6 mb-4">TNA design team is group of experts in advertising & branding field. Hold the key of architects & find the deep meanings of your slogan behind their door. Turn your ideas into 3D vision to create your own project world. </p>
        <h3 className="fs-md-4 fs-6 fw-bold text-uppercase mt-5">Who are we and what do we want?</h3>
        <p className="fs-6 mb-4">We consider ourselves a distinct mark in the field of offering advertising services since 1997 AD. We are offering our services fof realizing the achievement after the other.
          Our experience and long-practice in our helped us to realize a respectable position and an appropriate spread allowing us to serve many sectors inside the Kuwait market.
        </p>
        <h3 className="fs-md-4 fs-6 fw-bold text-uppercase mt-5">Our vision & mission</h3>
        <p className="fs-6 mb-4">Our vision: To make TNA one of the most well knwon leaders abiding by offering integral advertising services to our client in the targeted markets.
          Our mission: Committed to offer integrated advertising services looking forward to satisfing our clients by offering outstanding quality & services and supporting them to achieve the desired and achievement.
        </p>
      </div>
      <OurClients />
    </div>
  )
}
