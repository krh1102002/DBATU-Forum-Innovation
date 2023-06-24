import React, { useState } from 'react'
import MainLayout from '../layout/Main.layout'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import {BiPlay} from 'react-icons/bi'


const Gallery = () => {
  const images = [
    "https://react-photo-view.vercel.app/_next/static/media/4.57ff8e86.jpg",
    "https://react-photo-view.vercel.app/_next/static/media/2.b43f1ead.jpg",
    "https://react-photo-view.vercel.app/_next/static/media/3.70695fb9.jpg"
  ]
  const videos = [
    {
      url:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      poster:"https://tse1.mm.bing.net/th?id=OIP.RDS7QQZph3XgSVwmqfrUcgAAAA"
    },
    {
      url:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      poster:"https://tse1.mm.bing.net/th?id=OIP.RDS7QQZph3XgSVwmqfrUcgAAAA"
    },
    {
      url:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      poster:"https://tse1.mm.bing.net/th?id=OIP.RDS7QQZph3XgSVwmqfrUcgAAAA"
    },
    {
      url:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      poster:"https://tse1.mm.bing.net/th?id=OIP.RDS7QQZph3XgSVwmqfrUcgAAAA"
    }
  ]
  const [activeVideo,setActiveVideo] = useState(-1);
  const handlePlay = (idx,ele) =>{
    if(activeVideo !== -1){
      document.getElementById(`video${activeVideo}`).pause()
    }
    setActiveVideo(idx)
    document.getElementById(`video${idx}`).play()

  }
  return (
    <div>
      <div className='md:px-8 px-4 py-2'>
        <h1 className='text-2xl font-semibold py-2 '>Photos</h1>
        <PhotoProvider>
          <div className="flex justify-start  items-center flex-wrap gap-4 py-4">
            {images.map((item, index) => (
              <PhotoView key={index} src={item}>
                <img src={item} alt="" className='md:w-44 w-40 md:h-40 h-36 rounded overflow-hidden  object-cover' />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
      <div className='md:px-8 px-4 py-2'>
        <h1 className='text-2xl font-semibold py-2'>Videos</h1>
        <div className='flex gap-4 w-full flex-wrap lg:justify-start justify-center items-center'>
          {videos.map((video,idx) =>(
              <div className='w-72 relative'>
                <video controls={activeVideo === idx} id={`video${idx}`}  src={video.url} poster={video.poster}></video>
                {activeVideo !== idx && <button onClick={(e) =>handlePlay(idx,e)} className='absolute videos top-2 left-2 px-4 text-white bg-[#242a32] hover:bg-opacity-80 py-1 border rounded-xl'>
                  <BiPlay size={28}/>
                </button>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainLayout(Gallery)