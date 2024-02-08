import React, { useState } from 'react';

const MentorForm = () => {
    const [mentorDetails, setMentorDetails] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        domain: '',
        linkedinId: '',
        availableTimeSlot: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMentorDetails({
            ...mentorDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Mentor Details Submitted:', mentorDetails);
        // Add logic to submit data to backend or perform further actions
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-4">Mentor Application Form</h1>
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={mentorDetails.name}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={mentorDetails.email}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
                        Phone Number:
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={mentorDetails.phoneNumber}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                {/* Domain */}
                <div className="mb-4">
                    <label htmlFor="domain" className="block text-sm font-medium text-gray-600">
                        Domain:
                    </label>
                    <input
                        type="text"
                        id="domain"
                        name="domain"
                        value={mentorDetails.domain}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                {/* LinkedIn ID */}
                <div className="mb-4">
                    <label htmlFor="linkedinId" className="block text-sm font-medium text-gray-600">
                        LinkedIn ID:
                    </label>
                    <input
                        type="text"
                        id="linkedinId"
                        name="linkedinId"
                        value={mentorDetails.linkedinId}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                {/* Available Time Slot */}
                <div className="mb-4">
                    <label htmlFor="availableTimeSlot" className="block text-sm font-medium text-gray-600">
                        Available Time Slot:
                    </label>
                    <input
                        type="text"
                        id="availableTimeSlot"
                        name="availableTimeSlot"
                        value={mentorDetails.availableTimeSlot}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default MentorForm;
