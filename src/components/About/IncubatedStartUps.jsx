import React from 'react'
import { Helmet } from 'react-helmet'
import dbatuforum from '../images/workinprogress.png'

const IncubatedStartUps = () => {
  
  return (
    <>
      <Helmet>
        <title>Incubated StartUps | DFIIE</title>
      </Helmet>
    
      <div className='w-full h-full flex flex-col justify-center items-center py-4'>
        <div className='flex flex-col justify-center items-center py-6 md:px-12 px-6 rounded-xl lg:w-3/4 w-11/12'>
          <div className='flex md:flex-row flex-col-reverse  items-center gap-6'>
            <div className='flex flex-col gap-2'>
              {/* <h1 className='text-2xl  font-semibold pb-6 text-[#19191d]'>About DFIIE</h1> */}
              
            </div>
            <img src={dbatuforum} alt="work in progress" />
          </div>
        </div>
      </div>
    </>
  )
}

export default IncubatedStartUps