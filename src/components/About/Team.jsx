import React, { useState } from 'react'
import SkeletonImage from '../SkeletonImage'
import { Helmet } from 'react-helmet'
import nabalwar from "../images/Nalbalwar.png"
import Kiwalekar from "../images/Kiwalekar.jpg"
import pore from "../images/pore.jpg"


const Team = () => {
  const teamMembers = [
    {
      "name": "Dr. Sanjay L. Nalbalwar",
      "image": nabalwar,
      "designation": "Member, Executive Committee- DFIIE"
    },
    {
      "name": "Dr. Sachin M. Pore",
      "image": pore,
      "designation": "Member, Executive Committee- DFIIE"
    },
    {
      "name": "Dr. Arvind W. Kiwalekar",
      "image": Kiwalekar,
      "designation": "Member, Executive Committee- DFIIE"
    }
  ]
  const [loading,setLoading] = useState(true)
  return (
    <>
      <Helmet>
        <title>Team | DFIIE</title>
      </Helmet>
    <div className='md:px-8 px-4 py-4'>
      <h1 className='md:text-3xl text-2xl font-semibold text-center py-6'>Our Team Members</h1>
      <div className='flex gap-6 flex-wrap justify-center items-center'>
        {teamMembers.map((member) =>(
          <div className='flex flex-col items-center  gap-1.5'>
            <div className='h-44 w-44'>
            {loading && <SkeletonImage height={'100%'} width={'100%'}  />} 
              <img src={member.image} onLoad={()=> setLoading(false)} alt={member.name} className={`rounded-full h-full w-full object-cover object-top ${loading?'hidden':'block'}`} />
            </div>
            <h3 className='text-xl font-semibold'>{member.name}</h3>
            <div className='text-sm text-gray-400'>{member.designation}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Team