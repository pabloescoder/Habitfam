import styles from "./DetailedHabit.module.css";
import HabitInfoCard from "./HabitInfoCard";
import HabitStats from "./HabitStats";
import Tracker from "./Tracker/Tracker";
import Leaderboard from "./Leaderboard";

const dummyHabitDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";

const DetailedHabit = () => {
  return (
    <main className={styles["detailed-habit-container"]}>
      <div style={{ display: "flex", flexWrap: "wrap", width: "75%" }}>
        <HabitInfoCard name="DSA" description={dummyHabitDescription} />
        <HabitStats daysLeft={12} overall={75} />
        <Tracker />
      </div>
      <div style={{ width: "25%" }}>
        <Leaderboard />
      </div>
    </main>
  );
};

export default DetailedHabit;
