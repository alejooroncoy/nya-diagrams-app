'use client';

import { FcGoogle } from 'react-icons/fc';
import { SiGithub } from 'react-icons/si';

import styles from './styles.module.css';
import { createClient } from '@/utils/supabase/client';

const LoginButtons = () => {
  const supabase = createClient();

  const oAuth = async (provider: 'github' | 'google') => {
    await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: location.origin + '/api/auth/callback',
      },
    });
  };

  return (
    <div className={styles['login-buttons']}>
      <button onClick={() => oAuth('google')}>
        <FcGoogle /> Google
      </button>
      <button onClick={() => oAuth('github')}>
        <SiGithub /> Github
      </button>
    </div>
  );
};

export default LoginButtons;
