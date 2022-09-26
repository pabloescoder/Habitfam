import styles from "./UserHabitCard.module.css";

const UserHabitCard = (props) => {
  return (
    <section className={styles["habit-info-card-container"]}>
      <h2>{props.name}</h2> <h2>{props.days}</h2> <h2>{props.completed}</h2>
      {/* <p>{props.description}</p> */}

    </section>
  );
};

export default UserHabitCard;
