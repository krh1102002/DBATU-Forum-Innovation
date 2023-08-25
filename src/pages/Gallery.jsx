import React, { useState } from 'react'
import MainLayout from '../layout/Main.layout'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import SkeletonImage from '../components/SkeletonImage';
import { Helmet } from 'react-helmet';
import banner1 from '../components/images/homeBanner1.png'
import banner2 from '../components/images/homeBanner2.png'
import banner3 from '../components/images/homeBanner3.jpg'
import banner4 from '../components/images/homeBanner4.png'
import banner5 from '../components/images/homeBanner5.png'


const Gallery = () => {
  const [loading,setLoading] = useState(true);
  const images = [
    banner1,banner2,banner3,banner4,banner5
  ]

  return (
    <div>
      <Helmet>
        <title>Gallery | DFIIE</title>
      </Helmet>
      <div className='md:px-8 px-4 py-2'>
        <h1 className='text-2xl font-semibold py-2 '>Photos</h1>
        <PhotoProvider>
          <div className="flex justify-start  items-center flex-wrap gap-4 py-4">
            {images.map((item, index) => (
              <>
                {loading && <SkeletonImage height={'9rem'} width={'10rem'} />} 
                <PhotoView key={index} src={item}>
                  <img src={item} alt="" onLoad={() => setLoading(false)}  className={`md:w-44 w-40 md:h-40 h-36 rounded overflow-hidden  object-cover ${loading?'hidden':'block'}`} />
                </PhotoView>
              </>
            ))}
          </div>
        </PhotoProvider>
      </div>
      <div className='md:px-8 px-4 py-2'>
        <h1 className='text-2xl font-semibold py-2'>Videos</h1>
        <div className='flex gap-4 w-full flex-wrap lg:justify-start justify-center items-center'>
            <div className='w-full'>
              <p className='text-gray-500 text-center py-2'>Under Process...</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout(Gallery)