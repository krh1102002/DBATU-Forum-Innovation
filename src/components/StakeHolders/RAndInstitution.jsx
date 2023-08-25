import React from 'react'
import { Helmet } from 'react-helmet'
import { ResearchDevelopmentAndInstitution } from '../../Data/StakeHolders'
import '../style.css'
const RAndInstitution = () => {
  return (
    <>
      <Helmet>
        <title>Research and Development Institution| DFIIE</title>
      </Helmet>
      <div className='w-full h-full flex flex-col justify-center items-center py-4'>
        <div className='flex flex-col justify-center items-center py-6 md:px-12 px-6  rounded-xl lg:w-11/12 w-11/12' style={{backgroundColor:"ghostwhite"}}>
          <div className='flex md:flex-row flex-col-reverse background-banner items-center  gap-6'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl  font-semibold pb-6 text-[#19191d]'>Research and Development Institution</h1>
              {ResearchDevelopmentAndInstitution.map((data) =>(
                <p className='text-normal  text-justify text-[#19191d]'>{data}</p>
                ))}
            </div>
            <img src="https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5zdGl0dXRpb258ZW58MHx8MHx8fDA%3D" style={{width:'20%'}} className='w-64 h-auto mt-3 img11' alt="About DFIIE" />
          </div>
        </div>
      </div>
    </>
  )
}

export default RAndInstitution