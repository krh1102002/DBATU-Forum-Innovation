import React from 'react'
import { useParams } from 'react-router-dom'
import AboutDFIIE from '../components/About/AboutDFIIE';
import BoardOfDirector from '../components/About/BoardOfDirector';
import DFIIEObjective from '../components/About/DFIIEObjective';
import DirectorMessage from '../components/About/DirectorMessage';
import FocusArea from '../components/About/FocusArea';
import IncubatedStartUps from '../components/About/IncubatedStartUps';
import TechAdvisorCommity from '../components/About/TechAdvisorCommity';
import VCMessage from '../components/About/VCMessage';
import VisionAndMission from '../components/About/VisionAndMission';
import Team from '../components/About/Team';
import MainLayout from '../layout/Main.layout';

const AboutPage = () => {
    const params = useParams();
  return (
    <div>
        {params.info === 'dfiie' && <AboutDFIIE />}
        {params.info === 'director' && <BoardOfDirector />}
        {params.info === 'objective' && <DFIIEObjective />}
        {params.info === 'director' && <DirectorMessage />}
        {params.info === 'focusareas' && <FocusArea />}
        {params.info === 'startups' && <IncubatedStartUps />}
        {params.info === 'team' && <Team />}
        {params.info === 'committee' && <TechAdvisorCommity />}
        {params.info === 'vcMessage' && <VCMessage />}
        {params.info === 'vision&Mission' && <VisionAndMission />}
    </div>
  )
}

export default MainLayout(AboutPage)