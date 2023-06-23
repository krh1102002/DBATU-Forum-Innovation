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
        {params.info === 'funding' && <FundingSupport />}
        {params.info === 'hr' && <HRSupport />}
        {params.info === 'ip' && <IPSupport />}
        {params.info === 'legal' && <LegalSupport />}
        {params.info === 'market' && <MarketConnect />}
        {params.info === 'mentoring' && <MentoringSupport />}
        {params.info === 'networking' && <NetworkingSupport />}
        {params.info === 'product-design' && <ProductDesigning />}
        {params.info === 'prototype' && <PrototypeDevSupport />}
        {params.info === 'technical' && <TechnicalSupport />}
    </div>
  )
}

export default MainLayout(Support)