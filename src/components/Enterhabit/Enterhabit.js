import React, {useEffect, useState} from "react";
import { css, Button, Grid } from "@nextui-org/react";
import { Input} from "@nextui-org/react";
import { gapi } from "gapi-script";
import "./Enterhabit.css"

const Enterhabit = () => {

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
                scope: ""
            })
        }
        gapi.load('client: auth2', start)
    })

    return (
        <div className="cover">
            
            <Grid.Container gap={2}><Grid>
                <Button light color="error" auto>
                    <h4><b>Enter in a New Habit! ➡️</b></h4>
                </Button>
            </Grid></Grid.Container>
    
            <br></br>
            <br></br>
            <input type="text" placeholder="Which Habit do you wish to start?" />
            <br></br>
            <input type="text" placeholder="Give a description about it" />
            <br></br>
            <input type="text" placeholder="When do you start?" />
            <br></br>
            <input type="text" placeholder="For how many days?" />
            <br></br>
            <br></br>
            <div className="create"><Grid.Container gap={2}>

            <Grid>
                <Button shadow color="error" auto>
                    Create
                </Button>
            </Grid>
        </Grid.Container>
    </div>
    </div>   
 )
}

export default Enterhabit