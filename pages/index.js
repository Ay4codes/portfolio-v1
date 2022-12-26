import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import NavBar from '../components/Global-components/Navbar';
import Homehead from '../components/Home-Components/Homehead';
import Home2ndSection from '../components/Home-Components/Home-2nd-section';
import Home3rdSection from '../components/Home-Components/Home-3rd-section';
import Home4thSection from '../components/Home-Components/Home-4th-section';

export default function Home() {
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
    </div>
  )
}
