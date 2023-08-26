import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './style.css'
import banner1 from './images/homeBanner1.jpg'
import banner2 from './images/homeBanner2.jpg'
import banner3 from './images/homeBanner3.jpg'
import banner4 from './images/homeBanner4.jpg'
import banner5 from './images/homeBanner5.jpg'
import banner6 from './images/homeBanner6.jpg'
import banner7 from './images/homeBanner7.jpg'
import banner8 from './images/homeBanner8.jpg'




// import required modules
import { Autoplay, Pagination } from "swiper";

export default function ImageSlider() {
  const posterImages = [
    banner1,banner2,banner4,banner5,banner3,banner6,banner7,banner8
  ]
  return (
    <>
      <Swiper
        direction={"horizontal"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
        
      >
        {posterImages.map((image,index) =>(
          <SwiperSlide key={index}>
              <img src={image}  alt="banner" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
