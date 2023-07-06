import React, { useState } from 'react'
import MainLayout from '../layout/Main.layout'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import {BiPlay} from 'react-icons/bi'
import SkeletonImage from '../components/SkeletonImage';
import { Helmet } from 'react-helmet';
import banner1 from '../components/images/homeBanner1.jpg'
import banner2 from '../components/images/homeBanner2.jpg'
import banner3 from '../components/images/homeBanner3.jpg'
import banner4 from '../components/images/homeBanner4.jpg'
import banner5 from '../components/images/homeBanner5.jpg'


const Gallery = () => {
  const [loading,setLoading] = useState(true);
  const images = [
    banner1,banner2,banner3,banner4,banner5
  ]
  const videos = [
    {
      url:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      poster:"https://tse1.mm.bing.net/th?id=OIP.RDS7QQZph3XgSVwmqfrUcgAAAA"
    },
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