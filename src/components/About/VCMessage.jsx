import React from 'react'
import { Helmet } from 'react-helmet'
import VCImage from '../images/vckaleImg.jpg'
import { vCData, vCMessage } from '../../Data/About'

const VCMessage = () => {
  return (
    <>
      <Helmet>
        <title>Hon'ble VC Message | DFIIE</title>
      </Helmet>
      <div className='w-full h-full flex flex-col justify-center items-center py-4'>
      <div className='flex flex-col justify-center items-center py-6 md:px-12 px-6 rounded-xl lg:w-11/12 w-11/12' style={{backgroundColor:"ghostwhite"}}>
        <div className='flex flex-row flex-col-reverse background-banner items-center gap-6'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl  font-semibold pb-6 text-[#19191d]'>Hon'ble VC Message</h1>
            {vCMessage.map((data) =>(
              <p className='text-normal  text-justify text-[#19191d]'>{data}</p>
              ))}
            {vCData.map((data,idx) =>(
              <p className={`text-normal ${idx === 0?'font-semibold mt-4':''}  text-justify text-[#19191d]`}>{data}</p>
              ))}
          </div>
          <img src={VCImage}   alt="Director DBATU" />
        </div>
      </div>
    </div>
    </>
  )
}

export default VCMessage