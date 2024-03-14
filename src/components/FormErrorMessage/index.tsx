import { IoAlertCircleOutline } from 'react-icons/io5';
import styles from './styles.module.css';

interface Props {
  error: string;
}

const FormError = ({ error }: Props) => {
  return (
    <span className={styles.error}>
      <IoAlertCircleOutline /> {error}
    </span>
  );
};

export default FormError;
