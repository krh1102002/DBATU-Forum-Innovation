import React, { useEffect, useState } from 'react'
import {BiChevronDown, BiChevronUp} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import logo from './images/logo2.png'
import { Link, useLocation } from 'react-router-dom'
import './style.css'
import { elements } from '../Data/NavbarData'

export const NavbarSm = ({onClose,setNavbarVisible}) =>{

    const [visible,setVisible] = useState(-1)
    const handleVisible = (idx) =>{
        if(idx === visible){
            setVisible(-1)
        }else{
            setVisible(idx)
        }
    }
    return(
        <>
        <div className='flex items-center justify-between px-2 py-1.5'>
            <div className='flex items-center gap-2'>
                <div>
                    <img src={logo} alt='Logo' className='md:h-32 sm:h-24 w-auto h-16'/>
                </div>
                <div className='sm:flex flex-col hidden'>
                    <h1 className='lg:text-2xl md:text-xl text-lg font-semibold text-blue-800 font-serif'>DBATU Forum Of Innovation, Incubation & Enterprise (DFIFE)</h1>
                    <h6 className='lg:text-lg text-sm font-semibold'>Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere, Maharashtra - 402301</h6>
                </div>
            </div>
            <div>
                <button onClick={onClose}>
                    <AiOutlineClose size={30} />
                </button>
            </div>
        </div>
        <div className='flex flex-col gap-2.5 py-2 px-2'>
        {elements.map((element, idx) =>(
            <div className='relative cursor-pointer px-2' key={element.name}>
                <div className='flex gap-1 z-20 items-center justify-between text-lg font-medium' onClick={() => handleVisible(idx)}>
                    <Link to={element?.path}>{element.name}</Link>
                    {visible === idx ? <span ><BiChevronUp size={24}/></span>: element.items && <span ><BiChevronDown size={24}/></span>}
                </div>
                {element.items && <div className={`flex flex-col items-start justify-center gap-2 w-full  height-transition ${visible === idx?'h-auto overflow-visible':' h-0 overflow-hidden'}`}>
                    {element?.items?.map((ele,idx) =>(
                        <Link to={ele.path} className=' w-full p-1.5 font-medium' key={idx} onClick={() => setNavbarVisible(false)}>
                            <span>{ele.name}</span>
                        </Link>
                    ))}
                </div>}
            </div>
        ))}
    </div>
    </>
    )
}

const Navbar = () => {

    const [visible,setVisible] = useState(-1)
    const {pathname} = useLocation()
    const [active,setActive] = useState("");
    useEffect(() =>{
        let i = 1;
        let currActive = "";
        while(pathname.charAt(i) !== '/' && i<pathname.length){
            currActive += pathname.charAt(i);
            i++;
        }
        if(currActive.length === 0)
            setActive("home")
        else if(currActive === 'news&announcement'){
            setActive('news & announcement')
        }
        else
            setActive(currActive)
    },[pathname])

    return(
        <nav className='lg:flex sticky z-20 top-0 bg-[#005580] hidden items-center justify-center gap-2.5 py-2'>
        {elements.map((element, idx) =>(
            <div className='relative cursor-pointer px-2' onMouseOver={() => setVisible(idx)} onMouseOut={() => setVisible(-1)} key={element.name}>
                <div className={`flex gap-1 items-center text-xl z-20 font-medium transition-all ease-linear duration-300  border-b-2 border-[#005580] border-hover hover:text-[#b0e7ff] ${active === element.name.toLowerCase()?'text-[#b0e7ff]':'text-white'}`}>
                    <Link to={element?.path}>{element.name}</Link>
                    {element?.items && <span><BiChevronDown size={24}/></span>}
                </div>
                {element.items && visible === idx && <div className='flex flex-col items-start justify-center gap-2 w-48  shadow-lg absolute z-10 bg-white top-[34px]' onMouseOver={() => setVisible(idx)} onMouseOut={() => setVisible(-1)}>
                    {element?.items?.map((ele) =>(
                        <Link to={ele.path} className='w-full p-1.5 hover:bg-gray-400 hover:bg-opacity-30 font-medium'>
                            <span>{ele.name}</span>
                        </Link>
                    ))}
                </div>}
            </div>
        ))}
    </nav>
  )
}

export default Navbar