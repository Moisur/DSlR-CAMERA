import React from 'react';
import logo from '../../Images/camera.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
const About = () => {
    const Navigate=useNavigate()
    return (
        <div className='bg-[#545454] w-100 text-center'>
            <img className='w-50 mx-auto' src={logo} alt="" />
            <button onClick={()=>Navigate('/')} className='bg-pink-500 px-7 py-2 my-7 text-white text-xl rounded font-sans font-medium'>Home <span className='px-2'><FontAwesomeIcon icon={faAngleRight} /></span></button>
        </div>
    );
};

export default About;