'use client';

import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import styles from './styles.module.css';

type Props = {
  variant: 'NORMAL' | 'ORANGE';
};

const Button = ({
  variant,
  onClick,
  type,
  children,
}: ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren & Props) => {
  return (
    <button
      className={`${styles.button} ${styles[`${variant}`]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
