import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { focusArea } from '../../Data/About'
import SkeletonImage from '../SkeletonImage'

const FocusArea = () => {
  const [loading,setLoading] = useState(true)
  console.log(loading)
  return (
    <>
      <Helmet>
        <title>Focus Areas | DFIIE</title>
      </Helmet>
    <div>
      <div className='w-full h-96'>
        <img 
          src="https://americanhealth.jhu.edu/sites/default/files/website-media/hero-images/hero_focus-area_people-working.jpg" 
          alt="LegalSupport"
          className={`w-full h-full object-cover ${loading?'hidden':'block'}`}
          onLoad={()=>setLoading(false)}
        />
        {loading && <SkeletonImage height={'24rem'} width={'100%'}  />} 

      </div>
      <ul className='m-auto list-disc md:px-12 px-6 py-4'>
      <h2 className='py-4 text-2xl font-semibold text-center'>Focus Area</h2>
        {focusArea.map((data,idx) =>{
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
</>
  )
}

export default FocusArea