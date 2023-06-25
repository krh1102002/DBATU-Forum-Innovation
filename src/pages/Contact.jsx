import React, { useState } from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { IoLocation } from 'react-icons/io5'
import MainLayout from '../layout/Main.layout'
import SkeletonImage from '../components/SkeletonImage'
import { Helmet } from 'react-helmet'


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading,setLoading] = useState(true);
  return (
    <div className=''>
      <Helmet>
        <title>Contact | DFIIE</title>
      </Helmet>
      <div>
        <img 
          className={`w-full h-96 ${loading?'hidden':'block'}`} 
          src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww" 
          alt=""
          onLoad={() => setLoading(false)}
          onError={() => setLoading(true)}
          />
        
        {loading && <SkeletonImage height={'24rem'} width={'100%'}  />} 

      </div>
      <div className='py-4 flex flex-col justify-center items-center w-full'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-center inline-block py-2 tracking-widest border-b-4 border-blue-800'>CONTACT US</h1>
          <p className={`text-gray-600 text-lg py-4`}>Feel free to Contact us by submitting below form and we will get back to you as soon as possible</p>
        </div>
        <div className='w-full flex justify-center py-6'>
          <form className={` lg:w-3/5 md:w-4/5 w-11/12 rounded px-4 py-6 border shadow-lg flex flex-col gap-4`} >
            <div className='flex flex-col '>
              <label htmlFor="name" className='font-bold py-1'>Name</label>
              <input type="text" value={name} name="name" id="name" className='border px-4 py-2 rounded bg-gray-200 text-gray-800 font-semibold focus:outline-none ' placeholder='Enter Your Name' required onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='flex flex-col '>
              <label htmlFor="email" className='font-bold py-1'>Email</label>
              <input type="email" value={email} name="email" id="email" className='border px-4 py-2 rounded bg-gray-200 text-gray-800 font-semibold focus:outline-none ' placeholder='Enter Your Email' required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='flex flex-col  '>
              <label htmlFor="message" className='font-bold py-1'>Message</label>
              <textarea name="" value={message} id="message" cols="30" rows="9" className='border px-4 py-2 rounded bg-gray-200 text-gray-800 font-semibold focus:outline-none resize-none' placeholder='Enter Your Message' required onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <div className='flex justify-end'>
              <input type="submit" value="Submit" className='px-12 rounded cursor-pointer py-2 bg-blue-500 text-white font-bold' />
            </div>
          </form>
        </div>
      </div>
      <div className='bg-black bg-opacity-90 w-full px-4 py-6 flex md:flex-row flex-col md:gap-2 gap-6 justify-around'>
        <div className='flex flex-col gap-2'>
          <div className='text-white flex items-center gap-2'>
            <AiFillPhone className='md:text-3xl text-2xl' />
            <h4 className='md:text-2xl text-lg font-semibold'>Phone</h4>
          </div>
          <span className='text-white text-lg'>+918275093218
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='text-white flex items-center gap-2'>
            <MdEmail className='md:text-3xl text-2xl' />
            <h4 className='md:text-2xl text-lg font-semibold'>Email</h4>
          </div>
          <span className='text-white text-lg'>ceo.dfiie@dbatu.ac.in
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='text-white flex items-center gap-2'>
            <IoLocation className='md:text-3xl text-2xl' />
            <h4 className='md:text-2xl text-lg font-semibold'>Location</h4>
          </div>
          <span className='text-white'>

            <b className='md:text-xl text-lg'>DBATU Forum of Innovation, Incubation & Enterprise (DFIIE) </b> <br />
            Dr. Babasaheb Ambedkar Technological University,  Lonere, Tal- Mangaon, Dist – Raigad. <br /> Maharashtra (India). 402103 <br />
          </span>
        </div>
      </div>
    </div>
  )
}


export default MainLayout(Contact)