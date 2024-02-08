import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OpportunityList = () => {
    const [opportunities, setOpportunities] = useState([]);

    useEffect(() => {
        // Fetch opportunities when the component mounts
        axios.get('http://localhost:5000/opportunity')
            .then(response => {
                setOpportunities(response.data);
            })
            .catch(error => {
                console.error('Error fetching opportunities:', error);
            });
    }, []);

    return (
        <div className="container mx-auto pt-8 bg-[#f0f8ff] pb-4 min-h-[100vh]">
            <h2 className="text-3xl font-bold mb-6 text-center">
                Opportunities List
            </h2>
            <div className=' m-[2rem] flex justify-end'>
                <Link to="/opportunity" className=" bg-green-400 px-2 py-1 border-[2px] border-green-500 rounded"
                >
                    + Create a new opportunity
                </Link>
            </div>
            {opportunities.map(opportunity => (
                <div key={opportunity._id} className="bg-white p-6 mb-6 w-[60%] m-auto rounded-lg shadow-md cursor-pointer">
                    <h3 className="text-xl text-center pb-4 font-semibold mb-2 border-b-[1px] border-blue-200 ">{opportunity.title}</h3>
                    <p className="text-gray-600 mb-4">{opportunity.description}</p>
                    <div className="flex items-center justify-between text-gray-600 border-t-[1px] border-blue-200">
                        <p className="mb-2">Location: {opportunity.location}</p>
                        <p>Deadline: {opportunity.deadline}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OpportunityList;
