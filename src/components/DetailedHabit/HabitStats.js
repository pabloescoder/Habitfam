import { Button } from "@nextui-org/react";
import styles from "./HabitStats.module.css";

const HabitStats = (props) => {
  return (
    <section className={styles["habit-stats-container"]}>
      <p className={styles.title}>
        <span>{props.daysLeft}</span> days left
      </p>
      <p className={styles.title}>
        <span>{props.overall}%</span> overall completion
      </p>
      <p>{props.description}</p>
      <div className={styles["button-container"]}>
        <Button shadow ghost color="error" css={{ fontSize: "1.1rem" }} auto>
          - Remove
        </Button>
        <Button shadow ghost color="error" css={{ fontSize: "1.1rem" }} auto>
          + Invite
        </Button>
      </div>
    </section>
  );
};

export default HabitStats;
