import React from "react";
import { Vcmessageforhomee, directormessageforhomee } from "../../Data/Homevc";
import { Fade } from "react-awesome-reveal";
import directorImg from '../images/DirectorLarge.jpg'
import vcImage from '../images/VCImage.jpg'
import { Link } from "react-router-dom";

const Vcmessageforhome = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center py-4">
        <div className="flex flex-col justify-center items-center py-6 lg:px-12 md:px-8 px-4">
          <div className="flex md:flex-row flex-col  items-center gap-8">
            <Fade direction='left' triggerOnce={true}>
              <img
                src={vcImage}
                className="lg:w-[350px] h-[300px] md:w-[600px]"
                alt="vice chancler"
              />
            </Fade>
            <Fade direction='right' triggerOnce={true}>
              <div className="flex flex-col gap-4">
                <h1 className="md:text-4xl text-2xl directormessage  font-semibold  lg:pb-6 text-[#192f59]">
                  Message From Hon'ble Vice-Chancellor
                </h1>
                {Vcmessageforhomee.map((data) => (
                  <p className="md:text-[17px]  text-justify text-[#19191d]">
                    {data}
                  </p>
                ))}
                <p className="text-[18px] text-justify vctext text-blue-700" style={{ fontWeight: "700" }}>
                  - Dr. Karbari. V. Kale (Chairman, DFIIE)
                </p>
                <div className="flex justify-items-start mt-3">
                  <Link to={'/about/vcMessage'} className="rounded  border px-2 py-1.5 text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white font-semibold transition-colors ease-in-out duration-100">Read More</Link>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center py-4">
        <div className="flex flex-col justify-center items-center py-6 lg:px-12 md:px-8 px-4">
          <div className="flex md:flex-row flex-col  items-center gap-9">
            <Fade direction='right' triggerOnce={true}>
              <img
                src={directorImg}
                className="w-full md:hidden block"
                alt="vice chancler"
              />
            </Fade>
            <Fade direction='left' triggerOnce={true}>
              <div className="flex flex-col gap-4">

                <h1 className="md:text-4xl text-2xl directormessage font-semibold   lg:pb-6 text-[#192f59]">
                  Message From Director
                </h1>
                {directormessageforhomee.map((data) => (
                  <p className="text-[17px]  text-justify text-[#19191d]">
                    {data}
                  </p>

                ))}
                <p className="text-[18px] text-justify vctext text-blue-700" style={{ fontWeight: "700" }}>
                  - Prof. S. L. Nalbalwar (Director, DFIIE)
                </p>
                <div className="flex justify-items-end mt-3">
                  <Link to={'/about/directormessage'} className="rounded  border px-2 py-1.5 text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white font-semibold transition-colors ease-in-out duration-100">Read More</Link>
                </div>
              </div>  </Fade>
            <Fade right triggerOnce={true}>
              <img
                src={directorImg}
                className="lg:w-[1000px] md:w-[1200px]  w-full md:block hidden"
                alt="vice chancler"
              />
            </Fade>
          </div>
        </div>
      </div>

    </>
  );
};

export default Vcmessageforhome;
