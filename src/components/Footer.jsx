import React from 'react'
import logo from './images/logo2.png'
import { elements } from '../Data/FooterData'
import { Link } from 'react-router-dom'
import { BiCopyright } from 'react-icons/bi'
import {BsLinkedin,BsFacebook} from 'react-icons/bs'


const Footer = () => {
    return (
        <footer className='flex flex-col flex-1 gap-6 py-8 md:px-12 px-4 bg-[#27303e] text-white'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-1 text-white'>
                    <h1 className='lg:text-2xl md:text-xl text-lg font-semibold  font-serif'>DBATU Forum of Innovation, Incubation & Enterprise (DFIIE)</h1>
                    <h6 className='lg:text-lg md:text-base text-sm font-semibold'>Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere, Maharashtra - 402301</h6>
                </div>
                <img src={logo} alt='Logo' className='md:h-20 sm:h-20 w-auto h-20'/>
            </div>
            <div className='flex md:justify-around justify-start gap-6 flex-wrap select-none'>
                {elements.map((ele) => (
                    ele.items && (
                        <div>
                            <h4 className='text-xl font-semibold py-3'>{ele.name}</h4>
                            <div className='flex flex-col gap-1 text-sm'>
                                {ele.items.map((item) => (
                                    <Link to={item.path} className='hover:text-gray-300'>{item.name}</Link>
                                ))
                                }
                            </div>
                        </div>
                    )
                ))}

                <div>
                    <h2 className='font-semibold'>Social Media</h2>
                    <div className='flex gap-2 py-4 items-center'>
                        <a href="https://seedfund.startupindia.gov.in/" rel="noreferrer" target='_blank'><BsFacebook size={30} /></a>
                        <a href="https://www.linkedin.com/company/dbatu-forum-of-innovation-incubation-enterprise/" rel="noreferrer" target='_blank'><BsLinkedin size={30}/></a>
                    </div>
                </div>
            </div>
            <div className='text-gray-400 text-center'>
                <span className='flex items-center select-none gap-2 justify-center'>
                    <BiCopyright /> DFIIE 2023
                </span>
                
            </div>
        </footer>
    )
}

export default Footer