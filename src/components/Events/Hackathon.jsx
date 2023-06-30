import React, { useState } from 'react'
import { Ideathon_Hackathon_Stretethon } from '../../Data/Events'
import SkeletonImage from '../SkeletonImage'

const Hackathon = () => {
  const [loading,setLoading] = useState(true)
  console.log(loading)
  return (
    <div>
      <div className='w-full h-94'>
        <img 
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SWRlYXRob24lMjAlMjYlMjBIYWNrYXRob258ZW58MHx8MHx8fDA%3D"
          alt="Ideathon / Hackathon / Stereothon"
          className={`w-full h-full object-cover ${loading?'hidden':'block'}`}
          onLoad={()=>setLoading(false)}
        />
        {loading && <SkeletonImage height={'24rem'} width={'100%'}  />} 

      </div>
      <ul className='m-auto list-disc md:px-12 px-6 py-4'>
      <h2 className='py-4 text-2xl font-semibold text-center'>Ideathon, Hackathon, and Stratethon</h2>
        {Ideathon_Hackathon_Stretethon.map((data,idx) =>{
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

export default Hackathon