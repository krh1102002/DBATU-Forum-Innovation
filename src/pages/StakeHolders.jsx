import React from 'react'
import { useParams } from 'react-router-dom'
import Academia from '../components/StakeHolders/Academia';
import EcosystemEnablers from '../components/StakeHolders/EcosystemEnablers';
import Government from '../components/StakeHolders/Government';
import Investors from '../components/StakeHolders/Investors';
import RAndInstitution from '../components/StakeHolders/RAndInstitution';
import ValuedPartner from '../components/StakeHolders/ValuedPartner';
import MainLayout from '../layout/Main.layout';

const StakeHolders = () => {
  const params = useParams();
  return (
    <div>
      {params.info === '' && <Academia />}
      {params.info === '' && <EcosystemEnablers />}
      {params.info === '' && <Government />}
      {params.info === '' && <Investors />}
      {params.info === '' && <RAndInstitution />}
      {params.info === '' && <ValuedPartner />}
    </div>
  )
}

export default MainLayout(StakeHolders)