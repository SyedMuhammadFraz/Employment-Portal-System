import React from 'react'
import PublishJobCard from './publishJobCard';

const getJobs = async ()=>{
    try {
        const res=await fetch('http://localhost:3000/api/job', {
            cache:'no-store',
        });

        if(!res.ok){
            throw new Error("failed to fetch jobs")
        }
        return res.json();
    } catch (error) {
        console.log(error)
    }
}

export default async function JobLists() {

    const {jobs} =await getJobs();

    return (
        <div className='mt-4'>
            {jobs && jobs.map((job, index) => (
                <PublishJobCard key={index} imageurl={"./assets/images/dp.png"} username={job.recruiterID} text={job.description} title={job.title} date={job.dueDate} tags={job.tags} />
            ))}
        </div>)
}

