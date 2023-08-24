import React from 'react'
import { useState } from 'react'
import SkeletonImage from './SkeletonImage'

const Image = ({ src, classData, alt}) => {
  const [loading, setLoading] = useState(true)
  return (
    <>
        {loading && <SkeletonImage />}
        <img src={src} alt={alt} onLoad={()=> setLoading(false)}   className={` ${classData} object-cover ${loading ? 'hidden' : 'block'} cursor-pointer`} />
    </>
  )
}

export default Image