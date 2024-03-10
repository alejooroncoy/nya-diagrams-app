import Link from 'next/link';
import styles from './page.module.css';

import LoginPanel from '@/components/LoginPanel';

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main__card}>
        <h1>Nya diagrams app</h1>
      </div>
      <div className={styles.main__arrow}></div>
      <div className={styles.main__card}>
        <h1>Flowchart creator</h1>
        <p>
          An application to create and execute flowcharts in a simple and fast
          way.
        </p>
        <Link href="">Create diagram</Link>
      </div>
      <div className={styles.main__arrow}></div>
      <div className={styles.main__card}>
        <h1>For more features log in</h1>
        <LoginPanel />
      </div>
    </main>
  );
}
