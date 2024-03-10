'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

import styles from './styles.module.css';

const LogoutButton = () => {
  const supabase = createClient();
  const router = useRouter();

  const logout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <button className={styles['logout-button']} onClick={logout}>
      Logout
    </button>
  );
};

export default LogoutButton;
