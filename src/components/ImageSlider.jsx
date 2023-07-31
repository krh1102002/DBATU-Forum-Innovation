import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './style.css'
import banner1 from './images/homeBanner1.png'
import banner2 from './images/homeBanner2.png'
import banner3 from './images/homeBanner3.jpg'
import banner4 from './images/homeBanner4.png'
import banner5 from './images/homeBanner5.png'


// import required modules
import { Autoplay, Pagination } from "swiper";

export default function ImageSlider() {
  const posterImages = [
    banner1,banner2,banner3,banner4,banner5
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
