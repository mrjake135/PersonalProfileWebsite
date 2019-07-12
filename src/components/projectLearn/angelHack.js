import React from 'react';
import {Grid, Cell} from 'react-mdl'
import angelHackExample from '../../images/angelHackExample.jpg'
import angelHackPresent from '../../images/angelHackPresent.jpg'
import angelHackWorking from '../../images/angelHackWorking.jpg'

function angelHack() {
    return(
        <div style = {{width: '100%', margin:'auto'}} className = "learn-more-inside">
        <Grid>
            <a href = "/projects" rel = "noopener noreferrer" className = "returnButton">
                <i class="fas fa-chevron-circle-left"></i>
            </a>
            <Cell col={12}>
                    <h1>AngelHack HochiMinh City 2019</h1>
                    <p> With a team of four, my team and I competed in AngelHack Ho Chi Minh City. There were approximately 30 teams and a couple of challenges.
                        We chose to do FE Credit's challenge, which was to help them streamline high quality viewers from their online platform into paying customers.
                        We hoped to help with the "high quality" aspect, and in 24 hours created a web app that gave customers the ability to calculate how much they
                        should pay back a month in regards to what product they buy. We were made finalists in the competition, however, did not eventually win.
                    </p>
            </Cell>
        </Grid>
        <Grid>
            <Cell col = {4}><img src = {angelHackExample} alt = 'angelHackExample' className = 'angelhack-example' ></img><p>The actual project presented</p></Cell>
            <Cell col = {4}><img src = {angelHackPresent} alt = 'angelHackPresent' className = 'angelhack-present' ></img><p>Our Presentation</p></Cell>
            <Cell col = {4}><img src = {angelHackWorking} alt = 'angelHackWorking' className = 'angelhack-working' ></img><p>Working hard</p></Cell>

        </Grid>
        </div>
    )
}

export default angelHack;