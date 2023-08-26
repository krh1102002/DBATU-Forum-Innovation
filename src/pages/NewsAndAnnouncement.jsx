import React from "react";
import MainLayout from "../layout/Main.layout";
import { Helmet } from "react-helmet";
import news1 from "../components/images/World-Entrepreneurship-Day.png";
import news2 from "../components/images/Idea-To-Enterprise.png";
import Image from "../components/Image";
import augustVolume1 from "../components/images/augustVolume1.png";
import dbatuforum from '../components/images/workinprogress.png'

const NewsAndAnnouncement = () => {
  const newsletter = [
    {
      img: augustVolume1,
      newslettername: "DFIIE Newsletter Volume-1 (August 2023)",
      path: "https://drive.google.com/file/d/1gTJvO6KE4LEj8th1Ez4UeOlm2eernEGl/view",
    },
   
    
  ];

  return (
    <>
      <Helmet>
        <title>News & Announcement | DFIIE</title>
      </Helmet>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center py-2.5 rounded-xl lg:w-10/12 w-11/12">
          <h1 className="text-center font-semibold text-3xl py-2.5">Events</h1>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border p-2 shadow rounded">
              <a href={news1} target="_blank" rel="noreferrer">
                <Image
                  src={news1}
                  width={"100%"}
                  alt="World Enterpreneurship Day"
                />
              </a>
              <p className="pt-1.5" style={{ textAlign: "justify" }}>
                DBATU Forum of Innovation, Incubation & Enterprise (DFIIE),
                Lonere celebrated World Entrepreneurship Day on{" "}
                <b>21st August 2023</b>, at Dr. Babasaheb Ambedkar Technological
                University, Lonere. More than 200 participants
                attended the programme.
              </p>
            </div>
            <div className="border p-2 shadow rounded">
              <a href={news2} target="_blank" rel="noreferrer">
                <Image
                  src={news2}
                  width={"100%"}
                  alt="World Enterpreneurship Day"
                />
              </a>
              <p className="pt-1.5" style={{ textAlign: "justify" }}>
                DBATU Forum of Innovation Incubation & Enterprise (DFIIE),
                Lonere has conducted One Day Orientation Programme for Startups
                at Government College of Engineering, Aurangabad. More than 60
                aspiring startups and faculty members were
                attended the programme.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center py-2.5 rounded-xl lg:w-10/12 w-11/12">
          <h1 className="text-center font-semibold text-3xl py-2.5">
            Newsletter
          </h1>
          <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-4">
          {newsletter.map((item, index) => {
            return (
              
                <div className="border p-2 shadow rounded">
                  <a href={item.path} target="_blank" rel="noreferrer">
                    <Image
                      key={index}
                      src={item.img}
                      width={"100%"}
                      alt="August Volume 1"
                    />
                  </a>
                  <a href={item.path} className="newsletter-text" style={{cursor:"pointer"}}>
                    <p className="pt-1.5">{item.newslettername}</p>
                  </a>
                
              </div>
            );
          })}
          </div>
        </div>
        <div className=' py-6 md:px-12 px-6 rounded-xl lg:w-10/12 w-11/12'>

        <div className="text-center font-semibold text-3xl py-2.5">Announcement</div>
          <div className='flex flex-row justify-center items-center gap-6'>
          
            <img src={dbatuforum} className="md:w-1/3"  alt="work in progress" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout(NewsAndAnnouncement);
