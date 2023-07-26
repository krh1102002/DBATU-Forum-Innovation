import React, { useState } from 'react'
import { InvestorMeet_Fest } from '../../Data/Events'
import SkeletonImage from '../SkeletonImage'
import investormeet1 from '../images/investor.jpg'
const InvestorMeet = () => {
  const [loading,setLoading] = useState(true)
  console.log(loading)
  return (
    <div>
      <div className='w-full h-94'>
        <img 
          src={investormeet1}
          alt="Ideathon / Hackathon / Stereothon"
          className={`w-full h-full object-cover ${loading?'hidden':'block'}`}
          onLoad={()=>setLoading(false)}
        />
        {loading && <SkeletonImage height={'24rem'} width={'100%'}  />} 

      </div>
      <ul className='m-auto list-disc md:px-12 px-6 py-4'>
      <h2 className='py-4 text-2xl font-semibold text-center'>Investor Meet / Investor Fest</h2>
        {InvestorMeet_Fest.map((data,idx) =>{
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

export default InvestorMeet