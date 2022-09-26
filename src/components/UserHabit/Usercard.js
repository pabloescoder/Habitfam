import React from "react";
import styles from "./Usercard.module.css";
import { css, Button, Grid } from "@nextui-org/react";
import { Input} from "@nextui-org/react";
const LeaderboardEntry = (props) => {
  return (
    <div>
      <p className={styles["leaderboard-name"]}>
        {props.rank} {props.name}
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

const Usercard = () => {
  return (
    <section className={styles["leaderboard-container"]}>
      
    <div className="container">
        <div className="wrapper">
              <div className="content">
                {/* <img src="" alt="" border-radius= "50%" width="80" height="50"/> */}
                    <h3>Peter Griffin</h3>
              </div>
        </div>
        <br></br>
        <br></br>
        
        
    </div>
      <LeaderboardEntry name="DSA" progress="80%" />
      <LeaderboardEntry name="Communication" progress="60%" />
      <LeaderboardEntry name="Exercise" progress="20%" /> 
      <br></br>
            <br></br>
      <div className="create"><Grid.Container gap={2}>
            
            <Grid>
                <Button shadow color="error" auto>
                    Create New Habit
                </Button>
            </Grid>
        </Grid.Container>
    </div>
    </section>
  );
};

export default Usercard;
