'use client';

import React, { useRef } from 'react';
import Link from 'next/link';

import styles from './Navbar.module.css';

export default function Navbar() {
  const refMenu = useRef<HTMLUListElement>(null);

  const onToggleMenu = () => {
    refMenu.current?.classList?.toggle(styles.NavShowList);
  };

  return (
    <nav className={styles.Nav}>
      <header className={styles.NavHeader}>
        <p>Nya Diagrams</p>
        <div onClick={onToggleMenu} className={styles.NavIcon}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>
      <ul ref={refMenu} className={styles.NavList}>
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
