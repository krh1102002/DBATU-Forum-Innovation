import React from 'react'
import { Helmet } from 'react-helmet'
import { focus1,focus2,focus3,focus4,focus5,focus6,focus7,focus8,focus9,focus10,focus11,focus12,focus13,focus14 } from './ImageImports'
import Image from '../Image'


const FocusArea = () => {
  const images = [focus1,focus2,focus3,focus4,focus5,focus6,focus7,focus8,focus9,focus10,focus11,focus12,focus13,focus14]
  return (
    <>
      <Helmet>
        <title>Focus Areas | DFIIE</title>
      </Helmet>

      <h1 className='text-3xl font-semibold text-center py-4'>Focus Areas</h1>
    <div className='flex items-center justify-center gap-6 flex-wrap py-4 md:px-12 px-4'>
      {images.map((image) =>(
        <Image src={image} alt="FocusArea" classData='w-48 shadow'/>
      ))}

    </div>
</>
  )
}

export default FocusArea