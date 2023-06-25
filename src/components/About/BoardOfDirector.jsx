import React from 'react'
import { aboutDFIIE } from '../../Data/About'
import dbatuforum from '../images/background.png'

const BoardOfDirector = () => {
  const boardMembers = [
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
    }
  ]
  return (
    <div className='md:px-8 px-4 py-4'>
      <h1 className='md:text-3xl text-2xl font-semibold text-center py-6'>Our Team Members</h1>
      <div className='flex gap-6 flex-wrap justify-center items-center'>
        {boardMembers.map((member) =>(
          <div className='flex flex-col items-center  gap-1.5'>
            <div className='h-44 w-44'>
              <img src={member.image} alt={member.name} className='rounded-full h-full w-full object-cover' />
            </div>
            <h3 className='text-xl font-semibold'>{member.name}</h3>
            <div className='text-sm text-gray-400'>{member.designation}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BoardOfDirector