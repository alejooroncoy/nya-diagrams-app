import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className={styles.input} />;
};

export default Input;
