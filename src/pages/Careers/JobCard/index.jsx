import React from 'react'
// icons
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
// react router dom
import { Link } from 'react-router-dom'
export default function JobCard({ title, disc, path }) {
    return (
        <div className='col-md-4  col-sm-6'>
            <div className='bg-white p-4'>
                <h5 className="card-title mb-2 text-uppercase">{title}</h5>
                <p className="card-disc max-lines-4">
                    {disc}
                </p>
                <Link to={`/job-detail/${path}`}>
                    <HiOutlineArrowNarrowRight className='fs-3' />
                </Link>
            </div>
        </div>
    )
}
