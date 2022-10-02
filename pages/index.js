
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    
      <main className={styles.main}>
       

        <p className={styles.description}>
        I&#39;m a student at Worcester Polytechnic Institute studying Computer Science. <br />
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
  <a href="https://www.blui.co" className={styles.card}>
            <h2>Blui &rarr;</h2>
            <p>Shop from my online store</p>
          </a>
    
        </div>
      </main>

     
  )
}
