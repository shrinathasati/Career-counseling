import './Nav.css';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Chat = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('email');
        navigate('/login');
    }
    return (
        <div className="nav">
            <Link to="/" className=' px-[4rem] font-bold text-3xl my-auto'>CareerMantri</Link>

            <ul className='pl-8 flex justify-between w-[35%] my-auto'>
                <li className='flex cursor-pointer'>Services <RiArrowDropDownLine className='m-auto text-3xl ' /></li>
                <Link to='/opportunityList' className='flex cursor-pointer'>Opportunity</Link>
                <Link to='/application' className='flex cursor-pointer'>Application</Link>
                <li className='flex cursor-pointer'>About</li>
                <li className='flex cursor-pointer'>Contact</li>
            </ul>

            <div className="ml-auto my-auto pr-[6rem]">
                {!localStorage.getItem('email') ? (<>
                    <Link className={`link ${location.pathname === '/login' ? "active" : ""}`} to='/login'>Login</Link>
                    <Link className={`link ${location.pathname === '/signup' ? "active" : ""}`} to='/signup'>Signup</Link>
                </>)
                    :
                    (<h5 className="nav_logout" onClick={handleLogout}>Logout</h5>)}
            </div>

        </div>
    )
}

export default Chat;
