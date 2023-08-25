import React, { useState } from 'react'
import Homelayout from '../layout/Home.layout'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { Helmet } from 'react-helmet'
import Vcmessageforhome from '../components/Home/vc message'
import Partner from '../components/Home/Partners'
const HomePage = () => {
  const [countUp,setCountUp] = useState(false);
  const data = [
    {
      name:"Incubated StartUps",
      total:20
    },
    {
      name:"Employment Generation",
      total:20
    },
    {
      name:"Mentor Network",
      total:80
    },
    {
      name:"Ecosystem Partnership",
      total:13
    },
    
    {
      name:"Events Conducted",
      total:50
    }
  ]
  console.log(countUp)
  return (
    <div>
      <Helmet>
        <title>DBATU Forum Of Innovation & Incubation Enterprise(DFIIE)</title>
      </Helmet>
      <ScrollTrigger onEnter={()=> setCountUp(true)} >
      <div className='flex px-4 py-4 gap-4 flex-wrap items-center justify-center'>
        {data.map((item) =>(
          <div className='md:w-[250px] w-[320px] border  text-white p-2 rounded' style={{backgroundColor:"#033d8b"}}>
            <h4 className='text-center md:text-3xl text-xl font-semibold font-mono'>
              {countUp &&<CountUp start = {0} end={item.total} delay={0} duration={3.5} />}+
            </h4>
            <h1 className='md:text-xl text-lg text-center font-semibold font-sans'>
              {item.name}
            </h1>
          </div>
        ))}
      </div>
      </ScrollTrigger>
      <Vcmessageforhome/>
      <Partner/>
        
    </div>
  )
}

export default Homelayout(HomePage)