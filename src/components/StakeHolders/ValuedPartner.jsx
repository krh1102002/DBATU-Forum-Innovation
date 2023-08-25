import React from 'react'
import { valuedPartner } from '../../Data/StakeHolders'
import { Helmet } from 'react-helmet'
import '../style.css'
import img1 from "../images/boudhik.png"
import img2 from "../images/csmss.jpg"
import img3 from "../images/deogiri.png"
import img4 from "../images/cluster.jpg"
import img5 from "../images/wadhwani.png"
import img6 from "../images/sibic.png"
import img7 from "../images/pccode.jpg"
import img8 from "../images/netrarit.jpg"
import img9 from "../images/mv.jpg"
import img10 from "../images/ena.png"
import Image from '../Image'
const ValuedPartner = () => {
  const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10]
  return (
    
    <>
   
      <Helmet>
        <title>Valued Partners | DFIIE</title>
      </Helmet>
    <div className='w-full h-full flex flex-col justify-center items-center py-4'>
      <div className='flex flex-col justify-center items-center py-6 md:px-12 px-6  rounded-xl lg:w-11/12 w-11/12' style={{backgroundColor:"ghostwhite"}}>
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
    <div className='flex items-center justify-center gap-6 flex-wrap py-4 md:px-12 sm:px-4 px-2'>
      {images.map((image) =>(
        <Image src={image} alt="FocusArea" classData='sm:w-48 w-44 shadow'/>
      ))}

    </div>
    </>
  )
}

export default ValuedPartner