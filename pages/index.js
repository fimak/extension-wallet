import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HomePage</title>
        <meta name="description" content="a web3 gateway to hidden experiences" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <Link href="/experience">
          <a className={styles.title}>
            <Image src="/homepage.svg" alt="HomePage" width={172} height={36} />
          </a>
        </Link>
        <p className={styles.description}>
          a web3 gateway to hidden experiences
        </p>
      </main>

      <footer className={styles.footer}>
        <span>powered by</span>
        <Link href="/experience">
          <a>
            <Image src="/near-logo.svg" alt="Near Logo" className={styles.logo} width={114} height={30} />
          </a>
        </Link>
      </footer>
    </div>
  );
}
