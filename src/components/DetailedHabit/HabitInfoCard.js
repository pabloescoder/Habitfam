import styles from "./HabitInfoCard.module.css";

const HabitInfoCard = (props) => {
  return (
    <section className={styles["habit-info-card-container"]}>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </section>
  );
};

export default HabitInfoCard;
