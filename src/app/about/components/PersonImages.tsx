import Image from 'next/image';
import styles from '../page.module.css';

import Person1 from '@/assets/Person1.svg';
import Person2 from '@/assets/Person2.svg';
import Person3 from '@/assets/Person3.svg';

const Persons = [Person1, Person2, Person3];

const PersonImages = () => {
  return Persons.map((p, i) => (
    <Image
      src={p}
      alt="Person image"
      className={`${styles[`about__person${i + 1}`]} ${styles.about__person}`}
      key={i}
    />
  ));
};

export default PersonImages;
