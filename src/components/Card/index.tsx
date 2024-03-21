import { PropsWithChildren } from 'react';
import styles from './styles.module.css';

import { CARD_SIZE } from '@/constants';

type CardProps = PropsWithChildren & {
  title: string;
  size: CARD_SIZE;
};

const Card = ({ children, title, size }: CardProps) => {
  return (
    <div className={`${styles.card} ${styles[`card__${size}`]}`}>
      <header className={styles.card__header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.card__body}>{children}</div>
    </div>
  );
};

export default Card;
