import React from 'react'
import { legalSupport } from '../../Data/Support'

const LegalSupport = () => {
  return (
    <div>
      <div className='w-full h-96'>
        <img src="https://tse2.explicit.bing.net/th?id=OIP.pcUoKh7Bdz5_0StCuU6t2QHaD4" className='w-full h-full object-cover' alt="" />
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