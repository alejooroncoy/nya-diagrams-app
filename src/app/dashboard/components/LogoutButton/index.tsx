'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button';

const LogoutButton = () => {
  const supabase = createClient();
  const router = useRouter();

  const logout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <Button onClick={logout} variant="ORANGE">
      Logout
    </Button>
  );
};

export default LogoutButton;
