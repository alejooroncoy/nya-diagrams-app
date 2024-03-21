import styles from './page.module.css';

import PersonImages from './components/PersonImages';
import Card from '@/components/Card';

const About = () => {
  return (
    <main className={styles.about}>
      <PersonImages />
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
