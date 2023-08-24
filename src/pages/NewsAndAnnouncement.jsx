import React from 'react'
import MainLayout from '../layout/Main.layout'
import { Helmet } from 'react-helmet'
import news1 from '../components/images/World-Entrepreneurship-Day.png'
import news2 from '../components/images/Idea-To-Enterprise.png'
import Image from '../components/Image'

const NewsAndAnnouncement = () => {

  return (
    <>
      <Helmet>
        <title>News & Announcement | DFIIE</title>
      </Helmet>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center py-2.5 rounded-xl lg:w-3/4 w-11/12'>
          <h1 className='text-center font-semibold text-3xl py-2.5'>News & Announcements</h1>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='border p-2 shadow rounded'>
              <a href={news1} target='_blank' rel="noreferrer">
                <Image src={news1} width={'100%'} alt="World Enterpreneurship Day" />
              </a>
              <p className='font-serif pt-1.5'>
                DBATU Forum of Innovation Incubation & Enterprise (DFIIE), Lonere celebrated World Entrepreneurship Day on <b>21st August 2023</b>, at Dr. Babasaheb Ambedkar Technological University, Lonere. More than 200 participants attended the programme.
              </p>
            </div>
            <div className='border p-2 shadow rounded'>
              <a href={news2} target='_blank' rel="noreferrer">
                <Image src={news2} width={'100%'}  alt="World Enterpreneurship Day" />
              </a>
              <p className='font-serif pt-1.5'>
                DBATU Forum of Innovation Incubation & Enterprise (DFIIE), Lonere has conducted One Day Orientation Programme for Startups at Government College of Engineering, Aurangabad. More than 60 aspiring startups and faculty members were attended the programme.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default MainLayout(NewsAndAnnouncement)