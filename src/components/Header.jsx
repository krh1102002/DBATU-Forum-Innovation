import React, { useState } from 'react'
import logo from './images/dbatuForum.jpg'
import {FaBars} from 'react-icons/fa'
import { NavbarSm } from './Navbar';

const Header = () => {
    const [navbarVisible,setNavbarVisible] = useState(false);
  return (
    <>
        <div className={`lg:hidden absolute bg-white z-20 h-screen w-screen transition-all ease-in-out duration-200 ${navbarVisible?'translate-x-0':'-translate-x-full'}`}>
            <NavbarSm onClose={() => setNavbarVisible(false)}/>
        </div>
        <div className='flex items-center lg:justify-center shadow justify-between gap-4 py-2 px-4'>
            <div className='flex items-center gap-2'>
                <div>
                    <img src={logo} alt='Logo' className='md:h-full w-auto h-[45px]'/>
                </div>
                <div className='sm:flex flex-col hidden'>
                    <h1 className='lg:text-2xl md:text-xl text-lg font-semibold text-blue-800 font-serif'>DBATU Forum Of Innovation, Incubation & Enterprise (DFIFE)</h1>
                    <h6 className='lg:text-lg text-sm font-semibold'>Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere, Maharashtra - 402301</h6>
                </div>
            </div>
            <div className='lg:hidden block'>
                <button onClick={() => setNavbarVisible(true)}>
                    <FaBars size={30}/>
                </button>
            </div>
        </div>
    </>
  )
}

export default Header