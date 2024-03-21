import Card from '@/components/Card';
import styles from './page.module.css';
import Image from 'next/image';

import Person1 from '@/assets/Person1.svg';
import Person2 from '@/assets/Person2.svg';
import Person3 from '@/assets/Person3.svg';

const About = () => {
  return (
    <main className={styles.about}>
      <Image src={Person1} alt="" className={`${styles.about__person1}`} />
      <Image src={Person2} alt="" className={`${styles.about__person2}`} />
      <Image src={Person3} alt="" className={`${styles.about__person3}`} />
      <Card title="About us" size="large">
        Welcome to Nya Studios! We simplify flowchart creation with our
        intuitive application. With just three creative minds behind this tool,
        we are dedicated to providing you with an exceptional user experience.
        Join us and turn your ideas into clear and professional diagrams in
        minutes.
      </Card>
    </main>
  );
};

export default About;
