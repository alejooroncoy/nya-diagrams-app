'use client';

import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import styles from './styles.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren & {
    variant: 'NORMAL' | 'ORANGE';
  };

const Button = (props: Props) => {
  return (
    <button
      className={`${styles.button} ${styles[`${props.variant}`]}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
