import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.Nav}>
      <header className={styles.Header}>Nya Diagrams</header>
      <ul className={styles.NavList}>
        <li>
          <Link href="">Frequent questions</Link>
        </li>
        <li>
          <Link href="">About</Link>
        </li>
        <li>
          <Link href="">Bug report</Link>
        </li>
      </ul>
    </nav>
  );
}
