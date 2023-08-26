import React from "react";
import { Fade } from "react-awesome-reveal";
import "swiper/css";
import { Pagination, Navigation,Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import img1 from "../images/boudhik.jpg"
import img2 from "../images/csmss.jpg"
import img3 from "../images/deogiri.jpg"
import img4 from "../images/cluster.jpg"
import img5 from "../images/wadhwani.jpg"
import img6 from "../images/sibic.jpg"
import img7 from "../images/pccode.jpg"
import img8 from "../images/netrarit.jpg"
import img9 from "../images/mv.jpg"
import img10 from "../images/ena.jpg"
import img11 from "../images/chamber.jpg"
import img12 from "../images/aic.jpg"


export default function Partner() {
  const partners = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12]
  
  return (
    <>
    <Fade direction="up" triggerOnce={true}>
      <div className="container py-4">
        <h3 className='w-full text-[#192f59] font-semibold text-3xl text-center'>Valued Partner</h3>
      </div >
      <div className="px-8 py-4 flex justify-center items-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={2}
          loop={true}
          autoplay={{delay:2000}}
          navigation={true}
          modules={[Pagination, Navigation,Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
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
