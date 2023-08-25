import React, { useState } from 'react'
import { government } from '../../Data/StakeHolders'
import banner from '../images/governmentbanner.png'
import { Helmet } from 'react-helmet';
import '../style.css'
const Government = () => {
  const [loading,setLoading] = useState(true);
  const handleLoad = () =>{
    console.log("Entered")
    setLoading(false)
  }

  return (
    <>
      <Helmet>
        <title>Government | DFIIE</title>
      </Helmet>
    <div className='w-full h-full flex flex-col justify-center items-center py-4'>
      <div className='flex flex-col justify-center items-center py-6 md:px-12 px-6  rounded-xl lg:w-10/12 w-11/12' style={{backgroundColor:"ghostwhite"}}>
        <div className='flex md:flex-row flex-col-reverse items-center gap-6 background-banner'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-semibold pb-6 text-[#27303e]'>Government</h1>
            {government.map((data) =>(
              <p className='text-base  text-justify text-[#19191d]'>{data}</p>
              ))}
          </div>
          <img src={banner} onLoad={handleLoad}  alt="government" style={{width:'20%'}} className={`${loading?'non':'block'} smallwidth`}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Government