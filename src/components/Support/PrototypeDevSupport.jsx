import React, { useState } from 'react'
import { productDevelopmentSupport } from '../../Data/Support'
import SkeletonImage from '../SkeletonImage'
import { Helmet } from 'react-helmet'
import imgs from '../images/prototype.jpg'

const PrototypeDevSupport = () => {
  const [loading,setLoading] = useState(true)
  console.log(loading)
  return (
    <div>
      <Helmet>
        <title>Prototype Development Support | DFIIE</title>
      </Helmet>
      <div className='w-full h-100'>
        <img 
          src={imgs}alt="Market Connect"
          className={`w-full h-full object-cover ${loading?'hidden':'block'}`}
          onLoad={()=>setLoading(false)}
        />
        {loading && <SkeletonImage height={'24rem'} width={'100%'}  />} 

      </div>
      <ul className='m-auto list-disc md:px-12 px-6 py-4'>
      <h2 className='py-4 text-2xl font-semibold text-center'>Prototype Development Support</h2>
        {productDevelopmentSupport.map((data,idx) =>{
          if(idx === 0){
            return(
              <p className='text-lg py-4 justify-normal'>{data}</p>
            )
          }else{
            return(
              <li className='py-2 justify-normal'>{data}</li>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default PrototypeDevSupport