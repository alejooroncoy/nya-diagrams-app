import { FcGoogle } from 'react-icons/fc';
import { SiGithub } from 'react-icons/si';

import styles from './styles.module.css';

const LoginButtons = () => {
  return (
    <div className={styles['login-buttons']}>
      <button>
        <FcGoogle /> Google
      </button>
      <button>
        <SiGithub /> Github
      </button>
    </div>
  );
};

export default LoginButtons;
