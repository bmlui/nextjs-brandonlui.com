import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brandon Lui</title>
        <meta name="description" content="Welcome to Brandon Lui\'s personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="gradienttext super defaultcolor" className={styles.title}>
          Brandon Lui
        </h1>

        <p className={styles.description}>
         <a href="mailto:contact@brandonlui.com">contact@brandonlui.com</a>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/bmlui" className={styles.card}>
            <h2>GitHub &rarr;</h2>
            <p>@bmlui</p>
          </a>

          <a href="https://www.linkedin.com/in/blui/" className={styles.card}>
            <h2>LinkedIn &rarr;</h2>
            <p>@blui</p>
          </a>

    
        </div>
      </main>

      <footer className={styles.footer}>
       
          Made by Brandon Lui.

      </footer>
    </div>
  )
}
