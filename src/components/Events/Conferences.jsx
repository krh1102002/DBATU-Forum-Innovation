
import React, { useState } from 'react'
import { conferences } from '../../Data/Events'
import SkeletonImage from '../SkeletonImage'
import imgs from '../images/conferences.jpg'
import { Helmet } from 'react-helmet'


const Conferences = () => {
  const [loading,setLoading] = useState(true)
  console.log(loading)
  return (

    <div>
    <Helmet>
        <title>Conferences | Events | DFIIE</title>
      </Helmet>
      <div className='w-full h-94'>
        <img 
          src={imgs}
          alt="Ideathon / Hackathon / Stereothon"
          className={`w-full h-full object-cover ${loading?'hidden':'block'}`}
          onLoad={()=>setLoading(false)}
        />
        {loading && <SkeletonImage height={'24rem'} width={'100%'}  />} 

      </div>
      <ul className='m-auto list-disc md:px-12 px-6 py-4'>
      <h2 className='py-4 text-2xl font-semibold text-center'>Conferences</h2>
        {conferences.map((data,idx) =>{
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

export default Conferences