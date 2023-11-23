"use client"
import React, { useState, useEffect } from 'react';
import HomepageProfile from '@/components/homepageProfile'
import Navbar from '@/components/navbar'
import PublishJob from '@/components/publishJob'
import AlertBar from '@/components/alertBar';
import ChatSection from '@/components/chatSection';
import JobLists from '@/components/jobLists';
import { useSession } from 'next-auth/react';

export default function Home() {
  const {data:session}=useSession();


  return (
    <>
      <Navbar className="mt-0" />

      <section className=" p-10 bg-[#F3F2EF]  w-full h-full ">

        <div className='flex justify-between pt-8'>

          <section className='fw-[225px] ml-[90px] '>
            <HomepageProfile name={session?.user?.name} />
            <AlertBar  />
          </section>

          <section className=' w-[543px] '>

            <PublishJob userId={session?.user?.id} />
            <div className='mt-4'>
              <JobLists />
            </div>
          </section>

          <section className=' w-[325px] mr-[60px] '>
            <ChatSection/>
          </section>

        </div>

      </section>
    </>
  )
}
