import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import SkeletonImage from '../SkeletonImage'
import nabalwar from "../images/Nalbalwar.png"
import pore from "../images/pore.jpg"
import Kiwalekar from "../images/Kiwalekar.jpg"
import jadhav from "../images/Jadhav.jpg"
import Iyer from "../images/Iyer.png"
import pawade from "../images/pawade.jpg"
const TechAdvisorCommity = () => {
  const adviseryteam = [
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
    },
    {
      "name": "Dr. Shivajirao M. Jadhav",
      "image": jadhav,
      "designation": "Member, Executive Committee- DFIIE"
    },
    {
      "name": "Dr. Brijesh Iyer",
      "image": Iyer,
      "designation": "Member, Executive Committee- DFIIE"
    },
    {
      "name": "Dr. Raju S. Pawade",
      "image": pawade,
      "designation": "Member, Executive Committee- DFIIE"
    }
  ]
  const [loading,setLoading] = useState(true)
  return (
    <>
      <Helmet>
        <title>Technical Advisory Commity | DFIIE</title>
      </Helmet>
    <div className='md:px-8 px-4 py-4'>
      <h1 className='md:text-3xl text-2xl font-semibold text-center py-6'>Technical Advisery Committee</h1>
      <div className='flex gap-6 flex-wrap justify-center items-center'>
        {adviseryteam.map((member) =>(
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

export default TechAdvisorCommity