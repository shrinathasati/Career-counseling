import React, { useState } from "react";
import axios from "axios";

const Feedback = () => {
    const [termsChecked, setTermsChecked] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        emailAddress: "",
        mobileNumber: "",
        interestDomain: "",
    });

    const handleTermsChange = () => {
        setTermsChecked(!termsChecked);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (termsChecked) {
            try {
                const response = await axios.post("http://127.0.0.1:5000/callback", formData);
                console.log(response.data);
                setFormData({
                    fullName: "",
                    emailAddress: "",
                    mobileNumber: "",
                    interestDomain: "",
                });
                setTermsChecked(false);
                alert("Feedback submitted successfully!");
            } catch (error) {
                console.error("Error submitting feedback:", error);
                alert("Failed to submit feedback. Please try again later.");
            }

        } else {
            alert("Please accept the terms and conditions before submitting.");
        }
    };

    return (
        <div className="mt-[2rem] mb-[7rem]">
            <div className="container mx-auto">
                <div className="flex">
                    <div className="w-1/2 text-left">
                        <h1 className="text-4xl mt-8 font-bold">
                            <span className="text-green-500">Confused</span> about career choices?
                        </h1>
                        <h2 className="text-lg mt-8 text-gray-500">
                            Avail Career Counselling from India's best <br /> Career Experts
                        </h2>

                        <div className="border border-green-500 rounded mt-7 p-4">
                            <h3 className="text-green-500 text-lg mb-4">Request a Callback</h3>
                            <div className="">
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    className="mt-4 p-1 outline-none w-[100%] border border-blue-200 focus:border-blue-500"
                                    placeholder="Full name"
                                    aria-label="Full name"
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="email"
                                    name="emailAddress"
                                    value={formData.emailAddress}
                                    placeholder="Email Address"
                                    className="mt-4 p-1 outline-none w-[100%] border border-blue-200 focus:border-blue-500"
                                    id="inputEmail"
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="number"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    placeholder="Mobile Number"
                                    className="mt-4 p-1 outline-none w-[100%] border border-blue-200 focus:border-blue-500"
                                    id="inputMobile"
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="interestDomain"
                                    value={formData.interestDomain}
                                    placeholder="Interest in which domain"
                                    className="mt-4 p-1 outline-none w-[100%] border border-blue-200 focus:border-blue-500"
                                    id="inputInterest"
                                    onChange={handleInputChange}
                                />
                                <div className="flex items-center mt-4">
                                    <input
                                        type="checkbox"
                                        id="termsCheckbox"
                                        checked={termsChecked}
                                        onChange={handleTermsChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="termsCheckbox" className="text-gray-700">
                                        I accept the terms and conditions
                                    </label>
                                </div>
                                <button
                                    className={`bg-[#243e36] text-white border border-600 p-2 rounded mt-4 ${!termsChecked && "opacity-50 cursor-not-allowed"
                                        }`}
                                    type="submit"
                                    onClick={handleSubmit}
                                    disabled={!termsChecked}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img
                            src="https://mindlerimages.imgix.net/new-landing-pages/campaign_page/bannerImg.png?fm=jpg&q=80"
                            alt="career consult"
                            className="w-4/5 ml-20 mt-16"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
