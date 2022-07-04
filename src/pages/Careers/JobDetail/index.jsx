import React from 'react'
// components
import PageTitle from '../../../Common/PageTitle';
import JobForm from './JobForm';

// react router
import { useParams } from 'react-router-dom'

// data
import jobsData from '../jobs-data'

// css
import './jobDetail.css'
export default function JobDetail() {
    const { jobId } = useParams();
    const jobData = jobsData.find(el => el.jobId === jobId)

    return (
        <>
            <PageTitle title={jobData.jobTitle} />
            <div className='container'>
                <div className="row g-md-5 g-3  mt-3 mb-5">
                    <div className="col-md-7">
                        <h3 className='text-uppercase'>Job DescriptioN</h3>
                        <p className='jop-text'>{jobData.jobDesc}</p>
                        <h3 className='text-uppercase mt-5'>THE WORK</h3>
                        <p className='jop-text'>{jobData.jobWork}</p>
                    </div>
                    <div className="col-md-5">
                        <JobForm />
                    </div>
                </div>
            </div>
        </>
    )
}
