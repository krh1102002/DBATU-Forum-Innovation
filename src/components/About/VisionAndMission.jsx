import React from 'react'
import { Helmet } from 'react-helmet'
import { vision, mission } from '../../Data/About'
import dbatuforum from '../images/vision.png'
import dbatuforum1 from '../images/mission.jpg'

const VisionAndMission = () => {
  return (
    <>
      <Helmet>
        <title>Vision & Mission | DFIIE</title>
      </Helmet>
    <div className='w-full h-full flex flex-col justify-center items-center py-4'>
      <div className='flex flex-col justify-center items-center py-6 md:px-12 px-6 bg-blue-100 rounded-xl lg:w-3/4 w-11/12'>
        <div className='flex md:flex-row flex-col-reverse background-banner items-center gap-6'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl  font-semibold pb-3 text-[#19191d]'>Vision</h1>
            {vision.map((data) =>(
              <p className='text-sm gap-3  text-justify text-[#19191d]' style={{fontSize:"20px"}}>{data}</p>
              ))}
          </div>
          <img src={dbatuforum} width={"281px"} alt="About DFIIE" />
        </div>
        <div className='flex md:flex-row flex-col-reverse background-banner items-center gap-6'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl  font-semibold pb-3 text-[#19191d]'>Mission</h1>
            {mission.map((data) =>(
              <p className='text-sm  text-justify text-[#19191d]' style={{fontSize:"19px"}}>{data}</p>
              ))}
          </div>
          <img className='pt-4' src={dbatuforum1} width={"281px"} alt="About DFIIE" />
        </div>
      </div>
    </div>
</>
  )
}

export default VisionAndMission