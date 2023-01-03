import '../styles/globals.css'
import '../styles/nav.css'
import '../styles/home.css'
import '../styles/footer.css'
import '../styles/about.css'


import { useState, useEffect } from 'react'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  const [pageVisits, setPageVisits] = useState(0)

    useEffect(() => {
        fetch('https://api.countapi.xyz/update/ay4codes/ay4codes/?amount=1')
        .then((res) => res.json())
        .then((result) => {
            setPageVisits(result.value)
        })
  }, [])
  return (
    <div>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Ayomide Ishola || @ay4codes" />
				<meta name="description" content="Full Stack Developer and Data Analyst with 2+ years of building experience." />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />


        {/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png" />
				<meta property="og:url" content="https://ay4codes.netlify.app/" />
				<meta property="og:title" content="Ayomide Ishola || @ay4codes" />
				<meta property="og:description" content="Full Stack Developer and Data Analyst with 2+ years of building experience." />
        <meta property="og:image" content="https://ay4codes.netlify.app/preview.png" />

        {/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://ay4codes.netlify.app/" />
				<meta property="twitter:title" content="Ayomide Ishola || @ay4codes" />
				<meta property="twitter:description" content="Full Stack Developer and Data Analyst with 2+ years of building experience." />
				<meta property="twitter:image" content="https://ay4codes.netlify.app/preview.png" />

      </Head>
      <Component {...pageProps} pageVisits={pageVisits} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Bakbak+One&family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Serif:ital,opsz,wght@0,8..144,100;0,8..144,200;0,8..144,300;0,8..144,400;0,8..144,500;0,8..144,600;0,8..144,700;0,8..144,800;0,8..144,900;1,8..144,100;1,8..144,200;1,8..144,300;1,8..144,400;1,8..144,500;1,8..144,600;1,8..144,700;1,8..144,800;1,8..144,900&display=swap" rel="stylesheet" />
    </div>
  )
}

export default MyApp
