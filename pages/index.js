import Head from 'next/head'
import s from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={s.container}>
      <Head>
        <title>Welcome to 5th dimension</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.main}>
        <h1 className={s.title}>
          Ok, i'm just testing this
        </h1>

        <p className={s.description}>
          Get started by freshing{' '}
          <code className={s.code}>your mind</code>
        </p>

        <div className={s.grid}>
          想要成为Rap Star吗?
        </div>
      </main>

      <footer className={s.footer}>
        Whatever goes in the footer
      </footer>
    </div>
  )
}
