import { Metadata } from 'next';
import styles from './page.module.css';

import LoginPanel from '@/components/LoginPanel';

export const metadata: Metadata = {
  title: 'Login',
};

const Login = () => {
  return (
    <main className={styles.login}>
      <div className={styles.login__card}>
        <header className={styles.login__header}>
          <h2>Login</h2>
        </header>
        <div className={styles['login__auth-buttons']}>
          <LoginPanel />
        </div>
      </div>
    </main>
  );
};

export default Login;
