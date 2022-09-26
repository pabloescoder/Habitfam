import styles from "./UserInfo.module.css";
import HabitInfoCard from "./UserHabitCard";

import Usercard from "./Usercard";

const DetailedHabit = () => {
  return (
    <main className={styles["detailed-habit-container"]}>
        <div style={{ width: "25%" }}>
        <Usercard />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", width: "75%" }}>
        <HabitInfoCard name="DSA" />
        <HabitInfoCard name="Communication" />
        <HabitInfoCard name="Exercise" />
      </div>
      
    </main>
  );
};

export default DetailedHabit;
