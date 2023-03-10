import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import NavBar from '../components/Global-components/Navbar';
import Homehead from '../components/Home-Components/Homehead';
import Home2ndSection from '../components/Home-Components/Home-2nd-section';
import Home3rdSection from '../components/Home-Components/Home-3rd-section';
import Home4thSection from '../components/Home-Components/Home-4th-section';
import Home5thSection from '../components/Home-Components/Home-5th-section';
import Footer from '../components/Global-components/Footer';

export default function Home(props) {
  const {pageVisits} = props
  return (
    <div className={'app-main-wrapper'}>
      <Head>
        <title>Ayomide Ishola || @ay4codes</title>
        <meta name="description" content="" />
      </Head>
      <div className='home-nav-n-head-wrapper'>
        <NavBar />
        <Homehead />
      </div>
      <Home2ndSection />
      <Home3rdSection />
      <Home4thSection />
      <Home5thSection />
      <Footer pageVisits={pageVisits} />
    </div>
  )
}
