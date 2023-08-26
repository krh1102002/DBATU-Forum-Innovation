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
        <div className='flex flex-col justify-center items-center py-6 md:px-12 px-6 rounded-xl lg:w-10/12 w-11/12'>
          <div className='flex md:flex-row flex-col-reverse  items-center gap-6'>
            
            <img src={dbatuforum} alt="work in progress" />
          </div>
        </div>
      </div>
    </>
  )
}

export default IncubatedStartUps