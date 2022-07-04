import React from 'react';
import { nanoid } from 'nanoid'

// css
import "./careers.css"


// components
import JobCard from './JobCard'
import PageTitle from '../../Common/PageTitle';

// data
import jobData from './jobs-data';
export default function Careers() {
    return (
        <div className='careers'>
            <PageTitle title="Join us today" />
            <div className='container mt-3 mb-3 p-3'>
                <div className='row g-3'>
                    {jobData.map(el => <JobCard title={el.jobTitle} disc={el.jobDesc} path={el.jobId} key={nanoid()}/>)}
                </div>
            </div >
        </div >
    )
}
