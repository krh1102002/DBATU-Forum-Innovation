import React from 'react'
import { valuedPartner } from '../../Data/StakeHolders'
import { Helmet } from 'react-helmet'
import '../style.css'
const ValuedPartner = () => {
  return (
    <>
      <Helmet>
        <title>Valued Partners | DFIIE</title>
      </Helmet>
    <div className='w-full h-full flex flex-col justify-center items-center py-4'>
      <div className='flex flex-col justify-center items-center py-6 md:px-12 px-6 bg-blue-100 rounded-xl lg:w-3/4 w-11/12'>
        <div className='flex md:flex-row flex-col-reverse background-banner items-center gap-6'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl  font-semibold pb-6 text-[#19191d]'>Valued Partners</h1>
            {valuedPartner.map((data) =>(
              <p className='text-normal  text-justify text-[#19191d]'>{data}</p>
              ))}
          </div>
          <img src="https://t-hub.co/img/webp/service_provider_banner.webp" style={{width:'20%'}} className='img11' alt="academia" />
        </div>
      </div>
    </div>
    </>
  )
}

export default ValuedPartner