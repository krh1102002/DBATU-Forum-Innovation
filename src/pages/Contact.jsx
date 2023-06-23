import React from 'react'
import { elements } from '../Data/NavbarData'
import MainLayout from '../layout/Main.layout'

const Contact = () => {
  console.log(elements)
  return (
    <div className='h-full w-full flex justify-center items-center flex-1'>
        <p className='text-lg'>
        <b className='text-xl'>DBATU Forum of Innovation, Incubation & Enterprise (DFIIE) </b> <br />
        Dr. Babasaheb Ambedkar Technological University,Lonere, Tal- Mangaon, Dist – Raigad. Maharashtra (India). 402103 <br />
        +918275093218 <br /> 
        ceo.dfiie@dbatu.ac.in <br />
        </p>
    </div>
  )
}

export default MainLayout(Contact)