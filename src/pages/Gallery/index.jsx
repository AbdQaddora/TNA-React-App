import React from 'react'
// components
import PageTitle from '../../Common/PageTitle'
// css
import './gallery.css';
// data
import GalleryData from './GalleryData';
export default function Gallery() {
  return (
    <div>
      <PageTitle title="Gallery" />
      <div className="container">
        <div className="row g-lg-5 g-md-4 g-3 mb-5 mt-1">
          {GalleryData.map(el => {
            
            return (
              <div key={Math.random()} className="col-md-4 col-sm-6 col-12 gallery-card d-flex align-items-center flex-column">
                <img className="img-fluid" src={el.img} alt={el.title} />
                <h3 className='mt-3 fs-4 gallary-card-title text-uppercase'>{el.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
