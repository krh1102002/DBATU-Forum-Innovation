import React from 'react'
import { mentors } from '../../Data/StakeHolders'
import { Helmet } from 'react-helmet'
import '../style.css'
import mentor from "../images/mentors_banner_img.jpg"
const Mentors = () => {
  return (
    <>
      <Helmet>
        <title>Mentors | DFIIE</title>
      </Helmet>
    <div className='w-full h-full flex flex-col justify-center items-center py-4'>
      <div className='flex flex-col justify-center items-center py-6 md:px-12 px-6  rounded-xl lg:w-11/12 w-11/12' style={{backgroundColor:"ghostwhite"}}>
        <div className='flex md:flex-row flex-col-reverse background-banner items-center gap-6'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl  font-semibold pb-6 text-[#19191d]'>Mentors</h1>
            {mentors.map((data) =>(
              <p className='text-normal  text-justify text-[#19191d]'>{data}</p>
              ))}
          </div>
          <img src={mentor} style={{width:'20%'}} className='img11' alt="mentors" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Mentors