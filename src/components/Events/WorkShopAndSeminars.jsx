import React, { useState } from 'react'
import { workShopAndSeminars } from '../../Data/Events'
import SkeletonImage from '../SkeletonImage'
import imgs from '../images/seminars.jpg'

const WorkShopAndSeminars = () => {
  const [loading,setLoading] = useState(true)
  console.log(loading)
  return (
    <div>
      <div className='w-full h-97'>
        <img 
          src={imgs}
          alt="Workshops and seminars"
          className={`w-full h-full object-cover ${loading?'hidden':'block'}`}
          onLoad={()=>setLoading(false)}
        />
        {loading && <SkeletonImage height={'24rem'} width={'100%'}  />} 

      </div>
      <ul className='m-auto list-disc md:px-12 px-6 py-4'>
      <h2 className='py-4 text-2xl font-semibold text-center'>Workshops and Seminars</h2>
        {workShopAndSeminars.map((data,idx) =>{
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

export default WorkShopAndSeminars