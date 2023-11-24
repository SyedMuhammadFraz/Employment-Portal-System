'use client'
import React, { useState } from 'react';

const ResumeModal = ({ resumeData }) => {
    const [isOpen, setIsOpen] = useState(false);

    resumeData= {
        "name": "John Doe",
        "address": "123 Main St, Cityville",
        "email": "john.doe@example.com",
        "phone": "555-1234",
        "purpose": "Seeking a challenging role in software development.",
        "experience": "Software Engineer at XYZ Corp for 3 years.",
        "project": "Developed a web application for online shopping.",
        "achievement": "Received Employee of the Month award at XYZ Corp."
      }

    // Assume resumeData has the structure like { name, address, email, phone, purpose, experience, project, achievement }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <div className="text-2xl font-bold mb-4">{resumeData.name}</div>
        <div className="text-gray-600 mb-2">{resumeData.address}</div>
        <div className="text-gray-600 mb-2">{resumeData.email}</div>
        <div className="text-gray-600 mb-4">{resumeData.phone}</div>
  
        <hr className="my-4" />
  
        <div className="mb-4">
          <div className="text-xl font-bold mb-2">Purpose</div>
          <p>{resumeData.purpose}</p>
        </div>
  
        <div className="mb-4">
          <div className="text-xl font-bold mb-2">Experience</div>
          <p>{resumeData.experience}</p>
        </div>
  
        <div className="mb-4">
          <div className="text-xl font-bold mb-2">Project</div>
          <p>{resumeData.project}</p>
        </div>
  
        <div className="mb-4">
          <div className="text-xl font-bold mb-2">Achievement</div>
          <p>{resumeData.achievement}</p>
        </div>
      </div>
    );
};

export default ResumeModal;
