import React from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../Images/camera.png'
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
            <div className='flex gap-3 items-center'>
              <img className='w-[30px]' src={logo} alt="" />
              <span className='text-2xl'>DSlR CAMERA</span>
            </div>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {
                navbarOpen ?<FontAwesomeIcon icon={faAngleRight} /> :<FontAwesomeIcon icon={faBars} />
              } 
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex gap-5 text-xl  uppercase text-white flex-col lg:flex-row list-none lg:ml-auto">
                <NavLink className={({isActive })=> isActive ? "text-[#ffff00] font-medium" : ""} to='/home'>Home</NavLink>
                <NavLink  className={({isActive })=> isActive ? "text-[#ffff00] font-medium" : ""} to='/reviews'>Reviews</NavLink>
                <NavLink className={({isActive })=> isActive ? "text-[#ffff00] font-medium" : ""} to='/dashboard'>Dashboard</NavLink>
                <NavLink className={({isActive })=> isActive ? "text-[#ffff00] font-medium" : ""} to='/blogs'>Blogs</NavLink>
                <NavLink className={({isActive })=> isActive ? "text-[#ffff00] font-medium" : ""} to='/about'>About</NavLink>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;