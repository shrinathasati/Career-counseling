import React, { useState } from 'react';
import './Nav.css';
import { AiOutlineUser, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { FaArrowRightLong } from 'react-icons/fa6';
import { BiMessageAdd } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import FileUploadComponent from './KnowMore/FileUploadComponent';

const KnowAboutYou = () => {
    const navigate = useNavigate();
   

    return (
        <>
            <div className="flex h-[100vh] mt-[4rem]">

                <div className='w-[60%] px-[4rem] py-[6rem] bg-[#fafcfc]'>
                    <h1 className='text-5xl font-bold py-4'>Know More  About You</h1>
                    <h1 className='text-xl'>What type of service you want?</h1>
                    <div className='w-[100%]'>
                        <div className='grid py-2 px-[3rem] mt-[5rem] rounded w-[100%]'>
                            <div className=''>
                                <div className='m-auto w-[100%] m-2  shadow-lg  p-4 cursor-pointer'>
                                    <FileUploadComponent />
                                </div>
                                <div className='m-auto  w-[100%] m-2  shadow-lg p-4 cursor-pointer' onClick={() => navigate('/resumeform')}>
                                    <div className='bg-[#243e36] m-auto  mt-2 p-2 w-[3rem] h-[3rem] rounded-full '><BiMessageAdd className='text-white mx-auto my-[0.5rem]' /></div>
                                    <div className='text-center '>
                                        <div className='px-2 text-lg font-semibold'> Fill Mannualy <br /> </div>

                                        <div className='px-2 text-sm '>For Myself</div>
                                    </div>
                                    <div className='flex justify-center'><FaArrowRightLong /></div>
                                </div>

                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className='w-[40%] bg-[#243e36] mt-[-56px] z-[-1]'>

                </div>

            </div>
        </>
    )
}

export default KnowAboutYou;