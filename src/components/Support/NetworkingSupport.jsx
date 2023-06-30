import React, { useState } from 'react'
import { networkingSupport } from '../../Data/Support'
import SkeletonImage from '../SkeletonImage'
import { Helmet } from 'react-helmet'
// import imgs from '../images/hackathon.jpg'

const NetworkingSupport = () => {
  const [loading,setLoading] = useState(true)
  console.log(loading)
  return (
    <div>
      <Helmet>
        <title>Networking Support | DFIIE</title>
      </Helmet>
      <div className='w-full h-94'>
        <img 
          src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV0d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Networking Support"
          className={`w-full h-full object-cover ${loading?'hidden':'block'}`}
          onLoad={()=>setLoading(false)}
        />
        {loading && <SkeletonImage height={'24rem'} width={'100%'}  />} 

      </div>
      <ul className='m-auto list-disc md:px-12 px-6 py-4'>
      <h2 className='py-4 text-2xl font-semibold text-center'>Networking Support</h2>
        {networkingSupport.map((data,idx) =>{
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

export default NetworkingSupport