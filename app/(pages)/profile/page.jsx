'use client'
import PublishJobCard from '@/components/publishJobCard';
import React from 'react'
import { getSession, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import SpecificJobs from '@/components/specificJobs';
import Navbar from '@/components/navbar';
import ResumeForm from '@/components/resumeForm';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("Opening Modal");
    setIsModalOpen(true);
};
  const closeModal = () => setIsModalOpen(false);
  const { data: session } = useSession();

  return (
    <section>
      <Navbar />
      <div className=' flex justify-center h-full w-screen bg-[#F3F2EF]  gap-4 pb-16 pt-16 '>
        <section>
          <div className='w-[783px] h-auto bg-white rounded-md'>
            <div>
              <img
                className=" rounded-t-md w-full h-[200px] object-cover"
                alt=""
                src="./assets/images/cover.png"
              />
            </div>

            <div className="relative -top-24 left-[3%] transform: -translateX-1/2">
              <img
                className="rounded-[50%] border-[3px] border-white w-[130px] h-[130px] object-cover"
                alt=""
                src="./assets/images/dp2.jpeg"
              />
            </div>

            <div className='py-4'>
              <div className='flex flex-col pl-5 pr-5  items-start justify-center mt-0  '>
                <p className='font-medium text-2xl text-blac pt-1k'>{session?.user?.name}</p>
                <p className='text-sm text-gray-500 pt-1'>IT Specialist</p>
                <p className='text-sm text-gray-500 pt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>

              <div className='flex gap-1'>

                <button
                  onClick={openModal}

                  className='w-full mt-2 h-10 inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm'
                >Maintain Resume</button>
                {isModalOpen && (
                  <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
                    <div className="fixed inset-0 transition-opacity" onClick={closeModal}>
                      <div className="absolute inset-0 bg-black opacity-75"></div>
                    </div>
                    <div className="z-10 rounded-lg shadow-md max-w-md mx-auto">
                      <ResumeForm userID={session?.user?.id} />
                      <button onClick={closeModal} className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 w-full rounded-md">
                        Close
                      </button>
                    </div>
                  </div>
                )}
                <button
                  className='w-full mt-2 h-10 inline-flex justify-center rounded-full border border-gray-500 shadow-sm px-4 py-2 bg-white text-base font-medium  text-gray-500 hover:border-2 hover:font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm'
                >More</button>

              </div>

            </div>

          </div>
          {/* Posts */}
          <div className='w-[783px] mt-4 bg-white rounded-md'>
            <h3 className='p-4'>Published Jobs</h3>
            <div className='mt-4 p-3'>
              <SpecificJobs userID={session?.user?.id} />
            </div>
          </div>
        </section>

        <section className='w-[290px]'>

          <div className=' flex flex-col items-start pb-4 justify-start bg-white rounded-md w-[290px]'>

            <h3 className='p-4 text-gray-500 border-b  w-full'>Your Dashboard</h3>

            <div className=' '>
              <div className=' px-3 text-center items-center justify-between '>
                <p className='text-[52px] font-[900] text-blue-500'>50 </p>
                <p className=' text-gray-500'>Recuritments</p>
              </div>
              <div className=' px-3 text-center items-center justify-between '>
                <p className='text-[52px] font-[900] text-blue-500'>5 </p>
                <p className=' text-gray-500'>Job Applications</p>
              </div>
              <div className=' px-3 text-center items-center justify-between '>
                <p className='text-[52px] font-[900] text-blue-500'>25 </p>
                <p className=' text-gray-500'>Profile Views</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>

  )
}

export default Profile