import { UseFormRegisterReturn } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface Props {
  register: UseFormRegisterReturn<any>;
}

const Input = (props: InputHTMLAttributes<HTMLInputElement> & Props) => {
  return <input {...props} {...props.register} className={styles.input} />;
};

export default Input;
