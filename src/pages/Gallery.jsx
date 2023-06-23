import React from 'react'
import MainLayout from '../layout/Main.layout'
import { PhotoProvider, PhotoView } from 'react-photo-view';


const Gallery = () => {
  const images = [
    "https://react-photo-view.vercel.app/_next/static/media/4.57ff8e86.jpg",
    "https://react-photo-view.vercel.app/_next/static/media/2.b43f1ead.jpg",
    "https://react-photo-view.vercel.app/_next/static/media/3.70695fb9.jpg"
  ]
  return (
    <div>
      <PhotoProvider>
        <div className="flex md:justify-start  justify-center items-center flex-wrap gap-4 md:px-8 py-4 px-4">
          {images.map((item, index) => (
            <PhotoView key={index} src={item}>
              <img src={item} alt="" className='md:w-44 w-36 md:h-40 h-32 rounded overflow-hidden  object-cover'/>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  )
}

export default MainLayout(Gallery)