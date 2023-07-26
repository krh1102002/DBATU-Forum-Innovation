import React from 'react'
import { investors } from '../../Data/StakeHolders'
import { Helmet } from 'react-helmet'

const Investors = () => {
  return (
    <>
      <Helmet>
        <title>Investors | DFIIE</title>
      </Helmet>
    <div className='w-full h-full flex flex-col justify-center items-center py-4'>
      <div className='flex flex-col justify-center items-center py-6 md:px-12 px-6 bg-blue-100 rounded-xl lg:w-3/4 w-11/12'>
        <div className='flex md:flex-row flex-col-reverse background-banner items-center gap-6'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl  font-semibold pb-6 text-[#19191d]'>Investors</h1>
            {investors.map((data) =>(
              <p className='text-normal  text-justify text-[#19191d]'>{data}</p>
              ))}
          </div>
          <img src="https://t-hub.co/img/webp/investor_banner_img.webp" alt="academia" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Investors