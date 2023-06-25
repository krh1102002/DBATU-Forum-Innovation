import React, { useState } from 'react'
import { legalSupport } from '../../Data/Support'
import SkeletonImage from '../SkeletonImage'

const LegalSupport = () => {
  const [loading,setLoading] = useState(true)
  console.log(loading)
  return (
    <div>
      <div className='w-full h-96'>
        <img 
          src="https://plus.unsplash.com/premium_photo-1661542759930-9cf315dae451?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="LegalSupport"
          className={`w-full h-full object-cover ${loading?'hidden':'block'}`}
          onLoad={()=>setLoading(false)}
        />
        {loading && <SkeletonImage height={'24rem'} width={'100%'}  />} 

      </div>
      <ul className='m-auto list-disc md:px-12 px-6 py-4'>
      <h2 className='py-4 text-2xl font-semibold text-center'>Legal Support</h2>
        {legalSupport.map((data,idx) =>{
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

export default LegalSupport