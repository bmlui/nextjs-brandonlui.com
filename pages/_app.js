import '../styles/globals.css'
import Head from "next/head"
import Header from "../components/header.js"
import Footer from "../components/footer.js"

function MyApp({ Component, pageProps }) {
  return ( 
  <>
  <Head>
        <title>Brandon Lui</title>
        <meta name="description" content="I'm a student at Worcester Polytechnic Institute studying Computer Science." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className='min-h-screen py-6'> 
    <Header />
<Component {...pageProps} />
</main>
<Footer />
  </> 
  )
}

export default MyApp
