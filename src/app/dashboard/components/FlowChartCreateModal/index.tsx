import { IoMdClose } from 'react-icons/io';
import styles from './styles.module.css';

import FlowChartCreateForm from '../FlowChartCreateForm';

interface Props {
  onClose: () => void;
}

const FlowChartCreateModal = ({ onClose }: Props) => {
  return (
    <div className={styles.modal}>
      <div className={styles['modal-container']}>
        <header className={styles.modal__header}>
          <h1 className={styles.modal__header__title}>New flowchart</h1>
          <button onClick={onClose} className={styles.modal__header__closebtn}>
            <IoMdClose />
          </button>
        </header>
        <FlowChartCreateForm />
      </div>
    </div>
  );
};

export default FlowChartCreateModal;
