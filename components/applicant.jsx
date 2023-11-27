'use client'
import React, { useState, useEffect } from 'react';
const Applicant = ({ username, resume, imageurl }) => {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);


    const openResumeModal = () => {
        setIsResumeModalOpen(true);
    };

    const closeResumeModal = () => {
        setIsResumeModalOpen(false);
    };

    return (
        <div className='flex justify-between w-full'>
            <div className=" flex items-center gap-3 ">
                <img
                    className=" rounded-[50%] w-[30px] h-[30px] object-cover"
                    alt=""
                    src={imageurl}
                />
                <div className=''>
                    <p className="font-bold">{username}</p>
                </div>
            </div>

            {/* ____________________Resume Moda_____________________- */}
            <button
                onClick={openResumeModal}
                className='w-full mt-2 h-10 inline-flex justify-center rounded-full border border-gray-500 shadow-sm px-4 py-2 bg-white text-base font-medium  text-gray-500 hover:border-2 hover:font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm'
            >
                My Resume
            </button>

            {isResumeModalOpen && (
                <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
                    <div className="fixed inset-0 transition-opacity" onClick={closeResumeModal}>
                        <div className="absolute inset-0 bg-black opacity-75"></div>
                    </div>
                    <div className="z-10 rounded-lg shadow-md max-w-md mx-auto">
                        {/* Render your Resume component here */}
                        <ResumeModal userID={params.users} onClose={closeResumeModal} />

                    </div>
                </div>
            )}        </div>
    )
}

export default Applicant