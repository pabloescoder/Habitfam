import styles from "./TrackerRow.module.css";

const UserDetails = (props) => {
  return (
    <div className={styles["user-details"]}>
      <p className={styles.name}>{props.name}</p>
      <p>{props.streak} day streak</p>
    </div>
  );
};

const TrackerBoxContainer = (props) => {
  const TrackerBoxes = props.trackerBoxArray.map((status, index) => (
    <TrackerBox
      key={`${props.name} ${status} ${index}`}
      filled={Boolean(status)}
    />
  ));

  return (
    <div
      style={{ display: "flex", marginLeft: "10px" }}
      className={styles["tracker-box-container"]}
    >
      {TrackerBoxes}
    </div>
  );
};

const TrackerBox = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.filled ? "#fc5185" : "#CCC",
        width: "30px",
        flexBasis: "30px",
        flexShrink: "0",
        height: "85%",
        content: "",
        margin: "0 5px",
        borderRadius: "5px",
      }}
    ></div>
  );
};

const TrackerRow = (props) => {
  return (
    <div className={styles["tracker-row-container"]}>
      <UserDetails name={props.name} streak={props.streak} />
      <TrackerBoxContainer
        name={props.name}
        trackerBoxArray={props.trackerBoxArray}
      />
    </div>
  );
};

export default TrackerRow;
