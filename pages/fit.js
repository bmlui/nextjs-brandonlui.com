
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    
      <main className={styles.main}>
       

      <p className="text-center text-neutral-400 text-base mb-5">
       Welcome to my fitness page.</p>
      
   
        <div className={styles.grid}>
        <a href="https://www.instagram.com/bluifitness/" className={styles.card}>
            <h2 className='font-bold'>Instagram &rarr;</h2>
            <p>@bluifitness</p>
          </a>
          <a href="https://www.strava.com/athletes/b_lui" className={styles.card}>
            <h2 className='font-bold'>Strava &rarr;</h2>
            <p>@b_lui</p>
          </a>
    
        </div>


     
      </main>

     
  )
}
