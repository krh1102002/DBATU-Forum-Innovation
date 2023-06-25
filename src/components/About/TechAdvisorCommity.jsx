import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import SkeletonImage from '../SkeletonImage'

const TechAdvisorCommity = () => {
  const adviseryteam = [
    {
      "name": "John Doe",
      "image": "https://tse2.mm.bing.net/th?id=OIP.IrUBHhdMo6wWLFueKNreRwHaHa",
      "designation": "Project Manager"
    },
    {
      "name": "Jane Smith",
      "image": "https://tse1.mm.bing.net/th?id=OIP.QjynegEfQVPq5kIEuX9fWQHaFj",
      "designation": "Senior Developer"
    },
    {
      "name": "Michael Johnson",
      "image": "https://tse1.mm.bing.net/th?id=OIP.leRaZskYpTKA55a0St0tZgHaJa",
      "designation": "Graphic Designer"
    },
    {
      "name": "Jane Smith",
      "image": "https://tse1.mm.bing.net/th?id=OIP.QjynegEfQVPq5kIEuX9fWQHaFj",
      "designation": "Senior Developer"
    },
    {
      "name": "Jane Smith",
      "image": "https://tse1.mm.bing.net/th?id=OIP.QjynegEfQVPq5kIEuX9fWQHaFj",
      "designation": "Senior Developer"
    },
    {
      "name": "Jane Smith",
      "image": "https://tse1.mm.bing.net/th?id=OIP.QjynegEfQVPq5kIEuX9fWQHaFj",
      "designation": "Senior Developer"
    },
    {
      "name": "Jane Smith",
      "image": "https://tse1.mm.bing.net/th?id=OIP.QjynegEfQVPq5kIEuX9fWQHaFj",
      "designation": "Senior Developer"
    },
    {
      "name": "Jane Smith",
      "image": "https://tse1.mm.bing.net/th?id=OIP.QjynegEfQVPq5kIEuX9fWQHaFj",
      "designation": "Senior Developer"
    },
    {
      "name": "Jane Smith",
      "image": "https://tse1.mm.bing.net/th?id=OIP.QjynegEfQVPq5kIEuX9fWQHaFj",
      "designation": "Senior Developer"
    },
    {
      "name": "Jane Smith",
      "image": "https://tse1.mm.bing.net/th?id=OIP.QjynegEfQVPq5kIEuX9fWQHaFj",
      "designation": "Senior Developer"
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
              <img src={member.image} onLoad={()=> setLoading(false)} alt={member.name} className={`rounded h-full w-full object-cover ${loading?'hidden':'block'}`} />
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