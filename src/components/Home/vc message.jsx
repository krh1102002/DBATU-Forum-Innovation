import React from "react";
import { Vcmessageforhomee,directormessageforhomee } from "../../Data/Homevc";
import { Helmet } from "react-helmet";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Vcmessageforhome = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center py-4">
        <div className="flex flex-col justify-center items-center py-6 md:px-12 px-6  rounded-xl lg:w-3.5/4 w-11/12">
          <div className="flex md:flex-row flex-col-reverse  items-center gap-9">
            
            <img
              src="https://ediindia.ac.in/wp-content/uploads/2020/09/director-general-edii.jpg"
              className="w-50"
              style={{ maxWidth: "39%" }}
              alt="vice chancler"
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl  font-semibold pb-6 text-[#192f59]">
                Hon'ble Vice-Chancellor Message
              </h1>
              {Vcmessageforhomee.map((data) => (
                <p className="text-[17px]  text-justify text-[#19191d]">
                  {data}
                </p>
                
              ))}
              <p className="text-[18px] text-justify text-blue-700" style={{fontWeight:"700"}}>
              - Dr. Karbari. V. Kale (Chairman, DFIIE)
              </p>
              <div className="flex justify-items-start mt-3">
              <button className="readmorebtn btn rounded  bg-blue-600 p-2 text-white" style={{fontWeight:"700"}}>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center py-4">
        <div className="flex flex-col justify-center items-center py-6 md:px-12 px-6  rounded-xl lg:w-3.5/4 w-11/12">
          <div className="flex md:flex-row flex-col-reverse  items-center gap-9">
          <div className="flex flex-col gap-4">
              <h1 className="text-4xl  font-semibold pb-6 text-[#192f59]">
                Director General's Message
              </h1>
              {directormessageforhomee.map((data) => (
                <p className="text-[17px]  text-justify text-[#19191d]">
                  {data}
                </p>
                
              ))}
              <p className="text-[18px] text-justify text-blue-700" style={{fontWeight:"700"}}>
              - Prof. S. L. Nalbalwar (Director, DFIIE)
              </p>
              <div className="flex justify-items-end mt-3">
              <button className="readmorebtn btn rounded  bg-blue-600 p-2 text-white" style={{fontWeight:"700"}}>Read More</button>
              </div>
            </div>
            <img
              src="https://ediindia.ac.in/wp-content/uploads/2020/09/director-general-edii.jpg"
              className="w-50"
              style={{ maxWidth: "39%" }}
              alt="vice chancler"
            />
            
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Vcmessageforhome;
