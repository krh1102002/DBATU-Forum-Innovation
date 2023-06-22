import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './style.css'

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function ImageSlider() {
  const posterImages = [
    "https://www.icreate.org.in/wp-content/uploads/2022/04/Banner.jpg",
    "https://www.icreate.org.in/wp-content/uploads/2022/06/Home-Page-Banner-06-10.jpg",
    "https://www.icreate.org.in/wp-content/uploads/2022/05/Home-Page-Banner-07.jpg",
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
