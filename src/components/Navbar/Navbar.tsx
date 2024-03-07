'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import styles from './Navbar.module.css';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const onToggleMenu = () => setShowMenu(!showMenu);

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
      <ul className={`${styles.NavList} ${showMenu && styles.NavShowList}`}>
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
