import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import NavBar from '../components/Global-components/Navbar';
import Homehead from '../components/Home-Components/Homehead';
import Home2ndSection from '../components/Home-Components/Home-2nd-section';

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
    </div>
  )
}
