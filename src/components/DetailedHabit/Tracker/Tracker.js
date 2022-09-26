import styles from "./Tracker.module.css";
import TrackerRow from "./TrackerRow";

const dummyTrackerBoxArray1 = [
  1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1,
];

const dummyTrackerBoxArray2 = [
  0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1,
];

const Tracker = () => {
  return (
    <section className={styles["tracker-container"]}>
      <h3>Track Your Progress</h3>
      <TrackerRow
        name="Joe Swanson"
        streak={5}
        trackerBoxArray={dummyTrackerBoxArray1}
      />
      <TrackerRow
        name="Glenn Quagmire"
        streak={2}
        trackerBoxArray={dummyTrackerBoxArray2}
      />
    </section>
  );
};

export default Tracker;
