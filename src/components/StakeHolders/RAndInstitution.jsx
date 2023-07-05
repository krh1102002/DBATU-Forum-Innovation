import React from 'react'
import { Helmet } from 'react-helmet'
import { researchDevelopmentAndInstitution } from '../../Data/StakeHolders'

const RAndInstitution = () => {
  return (
    <>
      <Helmet>
        <title>Research Development And Institution| DFIIE</title>
      </Helmet>
      <div className='w-full h-full flex flex-col justify-center items-center py-4'>
        <div className='flex flex-col justify-center items-center py-6 md:px-12 px-6 bg-blue-100 rounded-xl lg:w-3/4 w-11/12'>
          <div className='flex md:flex-row flex-col-reverse background-banner items-center  gap-6'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl  font-semibold pb-6 text-[#19191d]'>Research Development & Institution</h1>
              {researchDevelopmentAndInstitution.map((data) =>(
                <p className='text-normal  text-justify text-[#19191d]'>{data}</p>
                ))}
            </div>
            <img src="https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5zdGl0dXRpb258ZW58MHx8MHx8fDA%3D" className='w-64 h-auto mt-3' alt="About DFIIE" />
          </div>
        </div>
      </div>
    </>
  )
}

export default RAndInstitution