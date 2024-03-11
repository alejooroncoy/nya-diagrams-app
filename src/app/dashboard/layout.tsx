import { PropsWithChildren } from 'react';

import styles from './page.module.css';

import NavbarDashboard from './components/NavbarDashboard';
import { GetUser } from '@/actions/UserActions';

const Layout = async ({ children }: PropsWithChildren) => {
  const user = await GetUser();

  return (
    <main className={styles.main}>
      <NavbarDashboard userProfile={user?.user_metadata.avatar_url as string} />
      {children}
    </main>
  );
};

export default Layout;
