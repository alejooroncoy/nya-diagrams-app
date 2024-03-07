import React from 'react';
import Link from 'next/link';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <p className={styles.CreatedBy}>
        Created by Nya studios -{' '}
        <Link href="https://github.com/alejooroncoy/nya-diagrams-app">
          Source Code
        </Link>
      </p>
      <div className={styles.Links}>
        <Link href="">@Yugi</Link>
        <Link href="https://github.com/dannielsss">@Danielss</Link>
        <Link href="https://github.com/alejooroncoy">@Alejo</Link>
      </div>
    </footer>
  );
}
