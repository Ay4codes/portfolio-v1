import '../styles/globals.css'
import '../styles/nav.css'
import '../styles/home.css'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Bakbak+One&family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Serif:ital,opsz,wght@0,8..144,100;0,8..144,200;0,8..144,300;0,8..144,400;0,8..144,500;0,8..144,600;0,8..144,700;0,8..144,800;0,8..144,900;1,8..144,100;1,8..144,200;1,8..144,300;1,8..144,400;1,8..144,500;1,8..144,600;1,8..144,700;1,8..144,800;1,8..144,900&display=swap" rel="stylesheet" />
    </div>
  )
}

export default MyApp
