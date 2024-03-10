import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export const GetUser = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const user = await supabase.auth.getUser();
  return user.data.user;
};
