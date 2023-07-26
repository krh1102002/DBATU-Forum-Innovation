import React, { useState } from 'react'
import { marketConnect } from '../../Data/Support'
import SkeletonImage from '../SkeletonImage'
import { Helmet } from 'react-helmet'
import imgs from '../images/mentoring.png'

const MentoringSupport = () => {
  const [loading,setLoading] = useState(true)
  console.log(loading)
  return (
    <div>
      <Helmet>
        <title>Mentoring Support | DFIIE</title>
      </Helmet>
      <div className='w-full h-94'>
        <img 
          src={imgs}
          alt="Market Connect"
          className={`w-full h-full object-cover ${loading?'hidden':'block'}`}
          onLoad={()=>setLoading(false)}
        />
        {loading && <SkeletonImage height={'24rem'} width={'100%'}  />} 

      </div>
      <ul className='m-auto list-disc md:px-12 px-6 py-4'>
      <h2 className='py-4 text-2xl font-semibold text-center'>Market Connect</h2>
        {marketConnect.map((data,idx) =>{
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

export default MentoringSupport