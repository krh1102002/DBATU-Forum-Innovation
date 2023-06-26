import React, { useState } from 'react'
import { mentoringSupport } from '../../Data/Support'
import SkeletonImage from '../SkeletonImage'
// import imgs from '../images/hackathon.jpg'

const MarketConnect = () => {
  const [loading,setLoading] = useState(true)
  console.log(loading)
  return (
    <div>
      <div className='w-full h-94'>
        <img 
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFya2V0JTIwY29ubmVjdHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Market Connect"
          className={`w-full h-full object-cover ${loading?'hidden':'block'}`}
          onLoad={()=>setLoading(false)}
        />
        {loading && <SkeletonImage height={'24rem'} width={'100%'}  />} 

      </div>
      <ul className='m-auto list-disc md:px-12 px-6 py-4'>
      <h2 className='py-4 text-2xl font-semibold text-center'>Market Connect</h2>
        {mentoringSupport.map((data,idx) =>{
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

export default MarketConnect