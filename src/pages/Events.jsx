import React from 'react'
import { useParams } from 'react-router-dom'
import Conferences from '../components/Events/Conferences';
import Hackathon from '../components/Events/Hackathon';
import InvestorMeet from '../components/Events/InvestorMeet';
import StartUpMeet from '../components/Events/StartUpMeet';
import Webinars from '../components/Events/Webinars';
import WorkShopAndSeminars from '../components/Events/WorkShopAndSeminars';
import MainLayout from '../layout/Main.layout';

const Events = () => {
  const params = useParams();
  return (
    <div>
      {params.info === 'conferences' && <Conferences />}
      {params.info === 'ideathon-hackathon' && <Hackathon />}
      {params.info === 'investor-meet' && <InvestorMeet />}
      {params.info === 'startup' && <StartUpMeet />}
      {params.info === 'webinars' && <Webinars />}
      {params.info === 'workshop' && <WorkShopAndSeminars />}
    </div>
  )
}

export default MainLayout(Events)