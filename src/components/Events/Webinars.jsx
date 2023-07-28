import React, { useState } from 'react'
import { webinar } from '../../Data/Events'
import SkeletonImage from '../SkeletonImage'
import hackathon1 from '../images/webinar.jpg'
const Webinars = () => {
  const [loading,setLoading] = useState(true)
  console.log(loading)
  return (
    <div>
      <div className='w-full h-full'>
        <img 
          src={hackathon1} alt="Ideathon / Hackathon / Stereothon"
          className={`w-full h-96 object-cover ${loading?'hidden':'block'}`}
          onLoad={()=>setLoading(false)}
        />
        {loading && <SkeletonImage height={'24rem'} width={'100%'}  />} 

      </div>
      <ul className='m-auto list-disc md:px-12 px-6 py-4'>
      <h2 className='py-4 text-2xl font-semibold text-center'>Webinars</h2>
        {webinar.map((data,idx) =>{
          if(idx === 0){
            return(
              <p className='text-lg py-4'>{data}</p>
            )
          }else{
            return(
              <li className='py-2'>{data}</li>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default Webinars