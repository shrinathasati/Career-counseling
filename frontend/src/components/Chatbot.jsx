import React, { useState } from 'react';
import axios from 'axios';
import { BsSendFill } from "react-icons/bs";

const  Chatbot=()=> {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Add the user's message to the chat history
        const userMessage = { role: 'user', text: userInput };
        setChatHistory((prevChatHistory) => [...prevChatHistory, userMessage]);
        setUserInput('');

        // Send the user's message to the server (backend)
        const response = await axios.post('http://127.0.0.1:5000/chat', {
            user_input: userInput,
        });

        // Add the bot's response to the chat history
        const botMessage = { role: 'bot', text: response.data.response };
        setChatHistory((prevChatHistory) => [...prevChatHistory, botMessage]);
    };



    return (
        <div className="flex ">

            <div className=" h-[43px] w-[100%] mt-auto">
                <div className='h-[90vh]  overflow-scroll bg-[#f7dadf9e] pb-8'>
                    {
                        chatHistory.map((message, index) => (
                            <p key={index}>
                                <strong>{message.role === 'user' ? (
                                    <div className='text-white w-[100%]'><div className='w-[fit-content] px-4 m-2 rounded-full py-2 ml-auto bg-[#7676ad]'>{message.text}</div></div>
                                ) : (
                                    <div className=' w-[100%] '><div className='w-[fit-content] px-4 m-2 rounded-full py-2  bg-green-100'>{message.text}</div></div>
                                )}</strong>
                            </p>
                        ))}
                </div>
                <form className="fixed bottom-0  px-1 py-2  w-[100%] bg-[#7676ad]" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Type a message ..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        className="w-[60%] outline-none rounded-full bg-white px-4 py-2" />
                    <button type="submit" className="bg-white rounded-full text-center mt-2 align-center py-1 px-1  ">
                        <BsSendFill className="text-[#0c0c98] m-auto  text-2xl mt-1 " />
                    </button>
                </form>
            </div>


        </div>
    );

}
export default Chatbot;
