import React from 'react'
import { useState } from 'react'
import SkeletonImage from './SkeletonImage'

const Image = ({ src, classData}) => {
  const [loading, setLoading] = useState(true)
  return (
    <>
        {loading && <SkeletonImage />}
        <img src={src} onLoad={()=> setLoading(false)}   className={` ${classData} object-cover ${loading ? 'hidden' : 'block'} cursor-pointer`} alt="" />
    </>
  )
}

export default Image