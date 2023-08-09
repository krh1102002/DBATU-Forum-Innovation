import React from 'react'
import { technicalSupport } from '../../Data/Support'
import banner from '../images/technicalsupport.png'
import { useState } from 'react'
import SkeletonImage from '../SkeletonImage'
import { Helmet } from 'react-helmet'

const TechnicalSupport = () => {
  const [loading,setLoading] = useState(true);
  return (
    <div>
      <Helmet>
        <title>Technical Support | DFIIE</title>
      </Helmet>
      <div className='w-full h-100'>
        {loading && <SkeletonImage height={'100%'} width={'100%'}  />} 
        <img 
          src={banner}
          className={`w-full h-full object-cover ${loading?'hidden':'block'}`}
          onLoad={() => setLoading(false)}
          alt="TechnicalSupport" 
        />
      </div>
      <ul className='m-auto list-disc md:px-12 px-6 py-4'>
      <h2 className='py-4 text-2xl font-semibold text-center'>Technical Support</h2>
        {technicalSupport.map((data,idx) =>{
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

export default TechnicalSupport