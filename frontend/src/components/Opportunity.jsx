import React, { useState } from 'react';
import axios from 'axios';
// import './styles.css'; // Import your Tailwind CSS styles

const OpportunityForm = () => {
    const [opportunity, setOpportunity] = useState({
        title: '',
        description: '',
        location: '',
        deadline: '',
        // Add other fields as needed
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/opportunity', opportunity);
            console.log(response.data);
            setOpportunity({
                title: '',
                description: '',
                location: '',
                deadline: '',
            })
            // Handle success, redirect, or show a success message
        } catch (error) {
            console.error('Error adding opportunity:', error);
            // Handle error, show an error message
        }
    };

    return (
        <div className='container mx-auto pt-8 bg-[#f0f8ff] pb-4 min-h-[100vh]'>
        <form className="max-w-md mx-auto p-8">
            <label className="block mb-2">Title:</label>
            <input
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                type="text"
                value={opportunity.title}
                onChange={(e) => setOpportunity({ ...opportunity, title: e.target.value })}
            />

            <label className="block mb-2">Description:</label>
            <textarea
                rows={5}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                value={opportunity.description}
                onChange={(e) => setOpportunity({ ...opportunity, description: e.target.value })}
            ></textarea>
             
            <label className="block mb-2">Location:</label>
            <input
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                type="text"
                value={opportunity.location}
                onChange={(e) => setOpportunity({ ...opportunity, location: e.target.value })}
            />

            <label className="block mb-2">Deadline:</label>
            <input
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                type="date"
                value={opportunity.deadline}
                onChange={(e) => setOpportunity({ ...opportunity, deadline: e.target.value })}
            />

            {/* Add other fields as needed */}

            <button
                className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                type="submit"
                onClick={e=>handleSubmit(e)}
            >
                Submit
            </button>
            </form>
            </div>
    );
};

export default OpportunityForm;
