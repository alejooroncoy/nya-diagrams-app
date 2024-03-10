'use client';

import { PropsWithChildren } from 'react';

import styles from './styles.module.css';

type Props = {
  variant: 'NORMAL' | 'ORANGE';

  onClick: () => void;
};

const Button = ({ variant, onClick, children }: Props & PropsWithChildren) => {
  return (
    <button
      className={`${styles.button} ${styles[`${variant}`]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
