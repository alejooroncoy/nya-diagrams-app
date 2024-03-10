import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const user = await supabase.auth.getUser();

  return (
    <main>
      {user.data.user?.email}
      <div>Content</div>
    </main>
  );
}
