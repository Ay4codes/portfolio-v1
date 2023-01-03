import Head from 'next/head'
import { useEffect } from 'react';
import NavBar from '../components/Global-components/Navbar';
import Footer from '../components/Global-components/Footer';
import About1stSection from '../components/About-Components/About-1st-section';
import Home2ndSection from '../components/Home-Components/Home-2nd-section';
import AboutSkillsSection from '../components/About-Components/About-skills-section';

export default function About(props) {
  const {pageVisits} = props
  
  return (
    <div className={'app-main-wrapper'}>
      <Head>
        <title>About - Ayomide Ishola || @ay4codes</title>
      </Head>
      <NavBar />
      <About1stSection />
      <AboutSkillsSection />
      <Home2ndSection />
      <Footer pageVisits={pageVisits} />
    </div>
  )
}
