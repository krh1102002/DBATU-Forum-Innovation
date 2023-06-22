import React from 'react'
import { useParams } from 'react-router-dom'
import FundingSupport from '../components/Support/FundingSupport';
import HRSupport from '../components/Support/HRSupport';
import IPSupport from '../components/Support/IPSupport';
import LegalSupport from '../components/Support/LegalSupport';
import MarketConnect from '../components/Support/MarketConnect';
import MentoringSupport from '../components/Support/MentoringSupport';
import NetworkingSupport from '../components/Support/NetworkingSupport';
import ProductDesigning from '../components/Support/ProductDesigning';
import PrototypeDevSupport from '../components/Support/PrototypeDevSupport';
import TechnicalSupport from '../components/Support/TechnicalSupport';
import MainLayout from '../layout/Main.layout';

const Support = () => {
    const params = useParams();
  return (
    <div>
        {params.info === '' && <FundingSupport />}
        {params.info === '' && <HRSupport />}
        {params.info === '' && <IPSupport />}
        {params.info === '' && <LegalSupport />}
        {params.info === '' && <MarketConnect />}
        {params.info === '' && <MentoringSupport />}
        {params.info === '' && <NetworkingSupport />}
        {params.info === '' && <ProductDesigning />}
        {params.info === '' && <PrototypeDevSupport />}
        {params.info === '' && <TechnicalSupport />}
    </div>
  )
}

export default MainLayout(Support)