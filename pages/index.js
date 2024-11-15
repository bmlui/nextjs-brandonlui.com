
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    
      <main className={styles.main}>
       

      <p className="text-center text-neutral-400 text-base mb-5">
        I&#39;m a student at <span className="text-neutral-500">Worcester Polytechnic Institute</span> studying Computer Science.</p>
        <p className="text-center text-lg hover:underline">
         <a href="mailto:contact@brandonlui.com" >contact@brandonlui.com</a>
        </p>

    <p class="text-center text-lg hover:underline"><a href="tel:+18024172584">+1 (802) 417-BLUI</a></p>

        <div className={styles.grid}>
          <a href="https://github.com/bmlui" className={styles.card}>
            <h2 className='font-bold'><span className='classical-font'>GitHub</span> &rarr;</h2>
            <p>@bmlui</p>
          </a>

          <a href="https://www.linkedin.com/in/blui/" className={styles.card}>
            <h2 className='font-bold'><span className='classical-font'>LinkedIn</span> &rarr;</h2>
            <p>@blui</p>
          </a>

    
        </div>
      </main>

     
  )
}
