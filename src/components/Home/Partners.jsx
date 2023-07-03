import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import mv from "../images/mv.jpg"
import ena from "../images/ena.png"
import pccode from "../images/pccode.jpg"
import aic from "../images/aic.png"
import chamber from "../images/chamber.png"
import sibic from "../images/sibic.png"
import deogiri from "../images/deogiri.png"
import csmss from "../images/csmss.jpg"
import netrarit from "../images/netrarit.jpg"
import boudhik from "../images/boudhik.png"
import cluster from "../images/cluster.jpg"
import wadhwani from "../images/wadhwani.png"
import Fade from 'react-reveal/Fade';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Partner() {
  
  return (
    <>
    <Fade top>
    <div className="container">
      <h3 className="valued">Valued Partner</h3>
    </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        
          <SwiperSlide>
              <div className="flex justify-center items-center">
                <img src={mv} alt="mv"  className="logo1"/>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="flex  justify-center items-center">
                <img src={ena} alt="mv"  className="logo2"/>
              </div>
          </SwiperSlide> <SwiperSlide>
              <div className="flex  justify-center items-center">
                <img src={pccode} alt="mv"  className="logo3"/>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="flex  justify-center items-center">
                <img src={aic} alt="mv"  className="logo4"/>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="flex  justify-center items-center">
                <img src={chamber} alt="mv"  className="logo5"/>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="flex  justify-center items-center">
                <img src={sibic} alt="mv" className="logo6"/>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="flex  justify-center items-center">
                <img src={deogiri} alt="mv"  className="logo7"/>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="flex  justify-center items-center">
                <img src={csmss} alt="mv"  className="logo8"/>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="flex  justify-center items-center">
                <img src={netrarit} alt="mv"  className="logo9"/>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="flex  justify-center items-center">
                <img src={boudhik} alt="mv"  className="logo10"/>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="flex   justify-center items-center">
                <img src={cluster} alt="mv"  className="logo11"/>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="flex  justify-center items-center">
                <img src={wadhwani} alt="mv"  className="logo12"/>
              </div>
          </SwiperSlide>
       
      </Swiper>
      </Fade>
    </>
  );
}
