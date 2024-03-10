'use client';

import { FcGoogle } from 'react-icons/fc';
import { SiGithub } from 'react-icons/si';

import { createClient } from '@/utils/supabase/client';

import styles from './styles.module.css';

import Button from '../Button';

const LoginPanel = () => {
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
      <Button onClick={() => oAuth('google')} variant="NORMAL">
        <FcGoogle /> Google
      </Button>
      <Button onClick={() => oAuth('github')} variant="NORMAL">
        <SiGithub /> Github
      </Button>
    </div>
  );
};

export default LoginPanel;
