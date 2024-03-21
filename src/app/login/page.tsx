import { Metadata } from 'next';
import styles from './page.module.css';

import LoginPanel from '@/components/LoginPanel';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Login',
};

const Login = () => {
  return (
    <main className={styles.login}>
      <Card title="Login" size="small">
        <LoginPanel />
      </Card>
    </main>
  );
};

export default Login;
