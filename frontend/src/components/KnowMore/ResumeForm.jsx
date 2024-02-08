import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ResumeForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        education: '',
        skills: '',
        experience: '',
        certifications: '',
        projects: '',
        languages: '',
        // Add more fields as needed
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:5000/submit_resume', formData);
            console.log(response.data);
            // Handle success, redirect, or show a success message
            
            navigate('/');
        } catch (error) {
            console.error('Error submitting resume:', error);
            // Handle error, show an error message
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Resume Submission Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Education:</label>
                    <textarea
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Skills:</label>
                    <textarea
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Experience:</label>
                    <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Certifications:</label>
                    <textarea
                        name="certifications"
                        value={formData.certifications}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Projects:</label>
                    <textarea
                        name="projects"
                        value={formData.projects}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Languages:</label>
                    <textarea
                        name="languages"
                        value={formData.languages}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    ></textarea>
                </div>

                {/* Add more fields as needed */}

                <div className="mt-6">
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ResumeForm;
