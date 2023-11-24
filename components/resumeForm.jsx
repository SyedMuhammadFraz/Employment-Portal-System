'use client'
import React, { useState } from 'react';

const ResumeForm = ({ userID }) => {
    const [formData, setFormData] = useState({
        userID: '',
        name: '',
        address: '',
        email: '',
        phone: '',
        purpose: '',
        experience: '',
        project: '',
        achievement: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const submitResume = async (formData) => {
        // Make an API call to save the resume data
        try {
            const response = await fetch('/api/resume', {
                method: 'POST',
                body: JSON.stringify({
                    userId: formData.userID,
                    userID: { userID },
                    name: formData.name,
                    address: formData.address,
                    email: formData.email,
                    phone: formData.phone,
                    purpose: formData.purpose,
                    experience: formData.experience,
                    project: formData.project,
                    achievement: formData.achievement,
                }),
            });

            if (!response.ok) {
                throw new Error('Error submitting resume');
            }

            console.log('Resume submitted successfully');
        } catch (error) {
            console.error('Error submitting resume:', error.message);
            // Handle error, e.g., show an error message to the user
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitResume(formData);
    };

    return (
        <form className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="address">
                        Address
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="phone">
                        Phone
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <hr className="my-4" />

            {/* Additional fields */}
            <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="purpose">
                        Purpose
                    </label>
                    <textarea
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        id="purpose"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="experience">
                        Experience
                    </label>
                    <textarea
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="project">
                        Project
                    </label>
                    <textarea
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="achievement">
                        Achievement
                    </label>
                    <textarea
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        id="achievement"
                        name="achievement"
                        value={formData.achievement}
                        onChange={handleChange}
                    ></textarea>
                </div>
            </div>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded-md"
                type="submit"
            >
                Save Resume
            </button>
        </form>
    );
};

export default ResumeForm;
