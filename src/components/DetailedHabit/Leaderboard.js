import React from "react";
import styles from "./Leaderboard.module.css";

const LeaderboardEntry = (props) => {
  return (
    <div>
      <p className={styles["leaderboard-name"]}>
        #{props.rank} {props.name}
      </p>
      <div className={styles["progress-bar-container"]}>
        <div
          className={styles["progress-bar"]}
          style={{ width: props.progress }}
        ></div>
      </div>
    </div>
  );
};

const Leaderboard = () => {
  return (
    <section className={styles["leaderboard-container"]}>
      <h3>Leaderboard</h3>
      <LeaderboardEntry rank={1} name="Joe Swanson" progress="80%" />
      <LeaderboardEntry rank={2} name="Glenn Quagmire" progress="60%" />
    </section>
  );
};

export default Leaderboard;
