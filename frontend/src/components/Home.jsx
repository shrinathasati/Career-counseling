import './Nav.css';
import { AiOutlineUser, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { FaArrowRightLong } from 'react-icons/fa6';
import { BiMessageAdd } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Feedback from './Feedback';

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
        <Feedback />
        <div className="flex h-[100vh] mt-[4rem]">
            
            <div className='w-[60%] px-[4rem] py-[6rem] bg-[#fafcfc]'>
                <h1 className='text-5xl font-bold py-4'>Your Path to <br /> Correct Future Choice</h1>
                <h1 className='text-xl'>What type of service you want?</h1>
                <div className='w-[100%]'>
                    <div className='grid p-2 rounded w-[100%]'>
                            <div className='flex'>
                                <div className='flex m-2 shadow-lg w-[14rem] p-4 cursor-pointer' onClick={()=>navigate('/knowaboutyou')}>
                                <div className='bg-[#243e36] mt-2 p-2 w-[2rem] h-[2rem] rounded-full '><AiOutlineUser className='text-white' /></div>
                                <div>
                                        <div className='px-2  font-semibold'> Know About<br /> You </div>

                                    <div className='px-2 text-sm'>For Myself</div>
                                </div>
                                <div className='m-auto'><FaArrowRightLong /></div>
                            </div>
                            <div className='flex m-2  shadow-lg w-[14rem] p-4 cursor-pointer' onClick={() => navigate('/chatbot')}>
                                <div className='bg-[#243e36] mt-2 p-2 w-[2rem] h-[2rem] rounded-full '><BiMessageAdd className='text-white' /></div>
                                <div>
                                    <div className='px-2  font-semibold'> Chat with <br />  AI </div>

                                    <div className='px-2 text-sm'>For Myself</div>
                                </div>
                                <div className='m-auto'><FaArrowRightLong /></div>
                            </div>
                            
                        </div>
                        <div className='flex'>
                            <div className='flex m-2 shadow-lg w-[14rem] p-4 cursor-pointer' onClick={() => navigate('/room/1')}>
                                <div className='bg-[#243e36] mt-2 p-2 w-[2rem] h-[2rem] rounded-full '><AiOutlineVideoCameraAdd className='text-white' /></div>
                                <div>
                                    <div className='px-2  font-semibold'> Individual <br /> Counselling </div>

                                    <div className='px-2 text-sm'>For Myself</div>
                                </div>
                                <div className='m-auto'><FaArrowRightLong /></div>
                            </div>
                                <div className='flex m-2 shadow-lg w-[14rem] p-4 cursor-pointer' onClick={() => navigate('/testlinks')}>
                                <div className='bg-[#243e36] mt-2 p-2 w-[2rem] h-[2rem] rounded-full '><AiOutlineUser className='text-white' /></div>
                                <div>
                                    <div className='px-2  font-semibold'>Evaluate Progress <br />  </div>

                                    <div className='px-2 text-sm'>For Myself</div>
                                </div>
                                <div className='m-auto'><FaArrowRightLong /></div>
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

export default Home;