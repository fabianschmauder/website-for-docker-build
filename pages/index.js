import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alpaka App</title>
        <meta name="description" content="Nice Alpaka App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className={styles.main}>
        <img id="alpaca" src="https://images.placepaca.com/Alpaka_10.jpg" width="200" />
        <p>
          Hello!
        </p>
      </main>
    </div>
  )
}
