import '../styles/globals.css'
import Head from "next/head"
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

function MyApp({ Component, pageProps }) {
  return ( 
  <>
  <Head>
        <title>Brandon Lui</title>
        <meta name="description" content="Welcome to Brandon Lui's website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className='container'> 
    <Header />
<Component {...pageProps} />
</main>
<Footer />
  </> 
  )
}

export default MyApp
