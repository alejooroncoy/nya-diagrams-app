'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const supabase = createClient();
  const router = useRouter();

  const logout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;
