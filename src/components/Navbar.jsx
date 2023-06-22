import React, { useState } from 'react'
import {BiChevronDown, BiChevronUp} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import logo from './images/dbatuForum.jpg'
import { Link } from 'react-router-dom'

export const NavbarSm = ({onClose}) =>{
    const elements = [
        {name:"Home"},
        {name:"About", elements:["About DFIIE", "Vision & Mission"]},
        {name:"Stakeholder", elements:["Government","Investors"]},
        {name:"Support", elements:["Legal Support","Technical Support"]},
        {name:"Events", elements:["WorkShop & Seminars"]},
        {name:"News & Announcement"},
        {name:"Contact"},
        {name:"Gallery"}
    ]
    const [visible,setVisible] = useState(-1)
    return(
        <>
        <div className='flex items-center justify-between px-2 py-1.5'>
            <div className='flex items-center gap-2'>
                <div>
                    <img src={logo} alt='Logo' className='md:h-full w-auto h-[45px]'/>
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
                <div className='flex gap-1 z-20 items-center justify-between text-lg font-medium'>
                    <span>{element.name}</span>
                    {visible === idx ? <span onClick={() => setVisible(-1)}><BiChevronUp size={24}/></span>: element.elements && <span onClick={() => setVisible(idx)}><BiChevronDown size={24}/></span>}
                </div>
                {element.elements && <div className={`flex flex-col items-start justify-center gap-2 w-full transition-all duration-200 ease-linear overflow-hidden ${visible === idx?'translate-y-0':'-translate-y-[50%] h-0'}`}>
                    {element?.elements?.map((ele,idx) =>(
                        <div className=' w-full p-1.5 font-medium' key={idx}>
                            <span>{ele}</span>
                        </div>
                    ))}
                </div>}
            </div>
        ))}
    </div>
    </>
    )
}

const Navbar = () => {
    const elements = [
        {name:"Home", path:"/"},
        {name:"About", elements:["About DFIIE", "Vision & Mission"]},
        {name:"Stakeholder", elements:["Government","Investors"]},
        {name:"Support", elements:["Legal Support","Technical Support"]},
        {name:"Events", elements:["WorkShop & Seminars"]},
        {name:"News & Announcement"},
        {name:"Contact", path:'/contact'},
        {name:"Gallery"}
    ]
    const [visible,setVisible] = useState(-1)

    return(
        <div className='lg:flex sticky z-10 top-0 bg-white hidden items-center justify-center gap-2.5 py-2'>
        {elements.map((element, idx) =>(
            <div className='relative cursor-pointer px-2' onMouseOver={() => setVisible(idx)} onMouseOut={() => setVisible(-1)} key={element.name}>
                <div className='flex gap-1 items-center text-lg z-20 font-medium transition-all ease-linear duration-300 border-b-2 border-white hover:border-blue-800 hover:text-blue-800'>
                    <Link to={element?.path}>{element.name}</Link>
                    {element?.elements && <span><BiChevronDown size={24}/></span>}
                </div>
                {element.elements && visible === idx && <div className='flex flex-col items-start justify-center gap-2 w-48  shadow-lg absolute z-10 bg-white top-[30px]' onMouseOver={() => setVisible(idx)} onMouseOut={() => setVisible(-1)}>
                    {element?.elements?.map((ele) =>(
                        <div className=' w-full p-1.5 hover:bg-gray-300 hover:bg-opacity-30 font-medium'>
                            <span>{ele}</span>
                        </div>
                    ))}
                </div>}
            </div>
        ))}
    </div>
  )
}

export default Navbar