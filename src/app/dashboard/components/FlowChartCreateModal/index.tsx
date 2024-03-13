import { IoMdClose, IoMdCloseCircle } from 'react-icons/io';
import styles from './styles.module.css';
import Button from '@/components/Button';
import Input from '@/components/Input';

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
        <form className={styles.modal__form}>
          <Input type="text" placeholder="Flowchart name" />
          <Button type="submit" variant="ORANGE" onClick={() => {}}>
            Create flowchart
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FlowChartCreateModal;
