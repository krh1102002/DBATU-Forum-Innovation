import React from "react";
import Fade from 'react-reveal/Fade'
import "swiper/css";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
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


export default function Partner() {
  const partners = [mv,ena,pccode,aic,chamber,sibic,deogiri,csmss,netrarit,boudhik,cluster,wadhwani]
  
  return (
    <>
    <Fade top>
    <div className="container py-4">
      <h3 className="valued">Valued Partner</h3>
    </div >
      <div className="px-8 py-4 flex justify-center items-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
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
          {partners.map((partner) =>(
            <SwiperSlide>
              <div className="flex justify-center items-center">
                <img src={partner} alt="mv"  className="h-44 w-44 object-contain"/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </Fade>
    </>
  );
}
