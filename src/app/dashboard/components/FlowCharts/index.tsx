import { FaSearch } from 'react-icons/fa';
import styles from './styles.module.css';

import { VARIANTS_FLOWCHART_CARD } from '@/constants';
import FlowChartCard from '../FlowChartCard';

const FlowCharts = () => {
  return (
    <section className={styles.flowcharts}>
      <div className={styles['flowcharts-container']}>
        <h2 className={styles.flowcharts__title}>My flowcharts</h2>
        <label
          htmlFor="flowchartSearch"
          className={styles['flowcharts__input-container']}
        >
          <FaSearch width={15} />
          <input
            id="flowchartSearch"
            type="text"
            className={styles.flowcharts__input}
            placeholder="Search flowchart"
          />
        </label>

        <div className={styles.flowcharts__cards}>
          <FlowChartCard variant={VARIANTS_FLOWCHART_CARD.ADD} />
          <FlowChartCard variant={VARIANTS_FLOWCHART_CARD.CREATED} />
        </div>
      </div>
    </section>
  );
};

export default FlowCharts;
