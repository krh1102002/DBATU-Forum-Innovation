import React from 'react'
import { Helmet } from 'react-helmet'
import { directorData, directorMessage } from '../../Data/About'
import DirectorImage from '../images/DirectorLarge.jpg'

const DirectorMessage = () => {
  return (
    <>
    <Helmet>
      <title>Director Message | DFIIE</title>
    </Helmet>
    <div className='w-full h-full flex flex-col justify-center items-center py-4'>
      <div className='flex flex-col justify-center items-center py-6 md:px-12 px-6 bg-blue-100 rounded-xl lg:w-3/4 w-11/12'>
        <div className='flex flex-col-reverse background-banner items-center gap-6'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl  font-semibold pb-6 text-[#19191d]'>Director Message</h1>
            {directorMessage.map((data) =>(
              <p className='text-normal  text-justify text-[#19191d]'>{data}</p>
              ))}
            {directorData.map((data,idx) =>(
              <p className={`text-normal ${idx === 0?'font-semibold mt-4':''}  text-justify text-[#19191d]`}>{data}</p>
            ))}
          </div>
          <img src={DirectorImage}  className='w-[420px] h-auto rounded overflow-hidden'  alt="Director DBATU" />
        </div>
      </div>
    </div>
    </>

  )
}

export default DirectorMessage