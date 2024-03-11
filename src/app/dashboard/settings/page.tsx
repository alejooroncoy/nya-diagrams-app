import { GetUser } from '@/actions/UserActions';
import LogoutButton from '../components/LogoutButton';
import styles from './page.module.css';

const Settings = async () => {
  const user = await GetUser();

  return (
    <section className={styles.settings}>
      <div className={styles['settings-container']}>
        <h2 className={styles.settings__title}>Profile</h2>
        <div className={styles.settings__card}>
          Diagrams created: <span>x</span>
        </div>
        <div className={styles.settings__card}>
          <p>{user?.user_metadata.full_name}</p>
          <p>{user?.user_metadata.email}</p>
          <LogoutButton />
        </div>
      </div>
    </section>
  );
};

export default Settings;
