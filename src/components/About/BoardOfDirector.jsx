import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import SkeletonImage from '../SkeletonImage'
import kale from "../images/kale.png"
import malkani from "../images/malkani.png"
import jogi from '../images/Jogi.png'
import singh from '../images/singh.png'
import nalbalwar from '../images/Nalbalwar.png'
import john from '../images/john.png'
import kamble from "../images/kamble.png"
const Team = () => {
  const boardMembers = [
    {
      "name": "Prof. Dr. Karbhari V. Kale",
      "image":kale,
      "designation": "Hon’ble Vice Chancellor – Dr. BATU & Chairman- DFIIE"
    },
    {
      "name": "Shri. Tarun Malkani",
      "image": malkani,
      "designation": "Director- DFIIE"
    },
    {
      "name": "Dr. B. F. Jogi",
      "image":jogi,
      "designation": "Invitee Member DFIIE Board"
    },
    {
      "name": "Dr. S. L. Nalbalwar",
      "image": nalbalwar,
      "designation": "Director- DFIIE"
    },
    {
      "name": "Shri. Manpreet Singh",
      "image": singh,
      "designation": "President ICIB & Director- DFIIE"
    },
    {
      "name": "Shri. Mithun John",
      "image": john,
      "designation": "Observer- Invitee Member DFIIE Board"
    },
    {
      "name": "Dr. Vivek Vadke",
      "image": "https://tse4.mm.bing.net/th?id=OIP.Z5BlhFYs_ga1fZnBWkcKjQHaHz",
      "designation": "ExTech Process Engineering Ltd. & Director- DFIIE"
    },
    {
      "name": "Dr. Milind Kamble",
      "image": kamble,
      "designation": "Chairman- DICCI & Director- DFIIE"
    }
  ]
  const [loading,setLoading] = useState(true)
  return (
    <>
      <Helmet>
        <title>Board Of Director | DFIIE</title>
      </Helmet>
    <div className='md:px-8 px-4 py-4'>
      <h1 className='md:text-3xl text-2xl font-semibold text-center py-6'>Board of Director</h1>
      <div className='flex gap-6 flex-wrap justify-center items-center'>
        {boardMembers.map((member) =>(
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