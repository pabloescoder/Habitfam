import styles from "./DetailedHabit.module.css";
import HabitInfoCard from "./HabitInfoCard";
import HabitStats from "./HabitStats";
import Leaderboard from "./Leaderboard";

const dummyHabitDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";

const DetailedHabit = () => {
  return (
    <main className={styles["detailed-habit-container"]}>
      <HabitInfoCard name="DSA" description={dummyHabitDescription} />
      <HabitStats daysLeft={12} overall={75} />
      <Leaderboard />
    </main>
  );
};

export default DetailedHabit;
