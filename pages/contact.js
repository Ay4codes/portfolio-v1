import Head from 'next/head'
import { useEffect } from 'react';
import NavBar from '../components/Global-components/Navbar';
import Footer from '../components/Global-components/Footer';

export default function Contact(props) {
    const {pageVisits} = props

    return (
        <div className={'app-main-wrapper'}>
            <Head>
              <title>Contact - Ayomide Ishola || @ay4codes</title>
            </Head>
            <NavBar />
            <Footer pageVisits={pageVisits} />
        </div>
    )
}