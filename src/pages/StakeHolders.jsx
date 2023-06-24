import React from 'react'
import { useParams } from 'react-router-dom'
import Academia from '../components/StakeHolders/Academia';
import EcosystemEnablers from '../components/StakeHolders/EcosystemEnablers';
import Government from '../components/StakeHolders/Government';
import Investors from '../components/StakeHolders/Investors';
import RAndInstitution from '../components/StakeHolders/RAndInstitution';
import ValuedPartner from '../components/StakeHolders/ValuedPartner';
import MainLayout from '../layout/Main.layout';
import Mentors from '../components/StakeHolders/Mentors';

const StakeHolders = () => {
  const params = useParams();

  return (
    <div  className='flex flex-col justify-center flex-1 target' id='container'>
      {params.info === 'acdemia' && <Academia />}
      {params.info === 'ecosystem' && <EcosystemEnablers />}
      {params.info === 'government' && <Government />}
      {params.info === 'investors' && <Investors />}
      {params.info === 'institutions' && <RAndInstitution />}
      {params.info === 'partner' && <ValuedPartner />}
      {params.info === 'mentors' && <Mentors />}
    </div>

  )
}

export default MainLayout(StakeHolders)