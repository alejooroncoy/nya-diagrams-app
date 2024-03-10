'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import { FaArrowRight } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';
import { useRef } from 'react';
import Link from 'next/link';

interface NavbarDashboardProps {
  userProfile: string;
}

const NavbarDashboard: React.FC<NavbarDashboardProps> = ({ userProfile }) => {
  const menuRef = useRef<HTMLUListElement>(null);

  const handleClickToggle = () => {
    menuRef.current?.classList.toggle(styles['menu--open']);
  };

  return (
    <aside className={styles.aside}>
      <nav className={styles.aside__nav}>
        <button onClick={handleClickToggle} className={styles.aside__toggle}>
          <FaArrowRight className={styles.aside__toggle__icon} />
        </button>
        <Image
          className={styles.aside__photo}
          width={110}
          height={110}
          src={userProfile}
          alt="Foto de perfil"
        />
        <ul ref={menuRef} className={styles.menu}>
          <li className={styles.menu__item}>
            <Link className={styles.menu__item__link} href="/dashboard">
              <div className={styles.menu__item__link__icon}>
                <FaHome />
              </div>
              <span className={styles.menu__item__link__text}>Home</span>
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link
              className={styles.menu__item__link}
              href="/dashboard/settings"
            >
              <div className={styles.menu__item__link__icon}>
                <IoSettingsSharp />
              </div>
              <span className={styles.menu__item__link__text}>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default NavbarDashboard;
