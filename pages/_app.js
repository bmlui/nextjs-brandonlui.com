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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Scheherazade+New:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
    <main className='min-h-screen py-6 px-6'> 
    <Header />
<Component {...pageProps} />
</main>
<Footer />
  </> 
  )
}

export default MyApp
