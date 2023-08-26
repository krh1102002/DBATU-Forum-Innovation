import React, { useState } from 'react'
import { productDesigning } from '../../Data/Support'
import banner from '../images/productD.jpg'
import SkeletonImage from '../SkeletonImage'
import { Helmet } from 'react-helmet'

const ProductDesigning = () => {
  const [loading,setLoading] = useState(true)
  return (
    <div>
      <Helmet>
        <title>Product Designing | DFIIE</title>
      </Helmet>
      <div className='w-full h-100'>
        {loading && <SkeletonImage height={'24rem'} width={'100%'}  />} 
        <img 
          src={banner} 
          alt=""
          className={`w-full h-full object-cover ${loading?'hidden':'block'}`}
          onLoad={()=>setLoading(false)} 
        />
      </div>
      <ul className='m-auto list-disc md:px-12 px-6 py-4'>
      <h2 className='py-4 text-2xl font-semibold text-center'>Product Designing</h2>
        {productDesigning.map((data,idx) =>{
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

export default ProductDesigning