import { VARIANTS_FLOWCHART_CARD } from "@/constants";
import { FaPlus } from "react-icons/fa6";
import styles from "./styles.module.css";
import { FaProjectDiagram } from "react-icons/fa";

type Props = {
  variant?: string;
};

const FlowChartCard = (props: Props) => {
  const isAdd = props.variant === VARIANTS_FLOWCHART_CARD.ADD;

  const contentIsAdd = isAdd && (
    <div className={styles.card__main}>
      <FaPlus className={styles["card__main__add-icon"]} />
      <h3 className={styles.card__title}>Add new diagram</h3>
    </div>
  );

  const contentIsCreated = !isAdd && (
    <>
      <div
        className={styles.card__main.concat(
          ` ${styles["card__main--created"]}`
        )}
      >
        <h3 className={styles.card__title}>Diagrama #dea</h3>
        <span>Last time used: 5 hours ago</span>
      </div>
      <footer className={styles.card__footer}>
        <FaProjectDiagram className={styles["card__footer__diagram-icon"]} />
      </footer>
    </>
  );

  return (
    <article className={`${styles.card} ${styles["card--created"]}`}>
      {contentIsAdd} {contentIsCreated}
    </article>
  );
};

export default FlowChartCard;