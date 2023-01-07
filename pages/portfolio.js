import Portfolio from "../components/Portfolio-components/Portfolio"
import Head from 'next/head'
import { useEffect } from 'react';
import NavBar from '../components/Global-components/Navbar';
import Footer from '../components/Global-components/Footer';

export default function PortfolioPage(props) {
    const {pageVisits} = props

    return (
        <div className={'app-main-wrapper'}>
            <Head>
              <title>Portfolio - Ayomide Ishola || @ay4codes</title>
            </Head>
            <NavBar />
            <Portfolio />
            <Footer pageVisits={pageVisits} />
        </div>
    )
}