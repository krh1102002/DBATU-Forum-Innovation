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


// import required modules
import { Autoplay, Pagination } from "swiper";

export default function ImageSlider() {
  const posterImages = [
    banner1,banner2,banner3,banner4,banner5
  ]
  return (
    <>
      <Swiper
        direction={"vertical"}
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
        {posterImages.map((image) =>(
          <SwiperSlide key={image}>
              <img src={image}  alt="banner" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
