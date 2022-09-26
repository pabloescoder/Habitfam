import React from "react";
import { Button, Grid } from "@nextui-org/react";

import "./Enterhabit.css";

const Enterhabit = () => {
  return (
    <div className="cover">
      <Grid.Container gap={2}>
        <Grid>
          <Button light color="error" auto>
            <h4>
              <b>Enter in a New Habit! ➡️</b>
            </h4>
          </Button>
        </Grid>
      </Grid.Container>

      <br></br>
      <br></br>
      <input type="text" placeholder="Which Habit do you wish to start?" />
      <br></br>
      <input type="text" placeholder="Give a description about it" />
      <br></br>
      <input type="date" placeholder="When do you start?" />
      <br></br>
      <input type="date" placeholder="For how many days?" />
      <br></br>
      <br></br>
      <div className="create">
        <Grid.Container gap={2}>
          <Grid>
            <Button shadow color="error" auto>
              Create
            </Button>
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
};

export default Enterhabit;
