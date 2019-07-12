import React from 'react';
import {Grid, Cell} from 'react-mdl';
function reactWebsite() {
    return(
        <div style = {{width: '100%', margin:'auto'}}>
        <Grid className = "project-learn-more">
            <a href = "/projects" rel = "noopener noreferrer" className = "returnButton">
            <i class="fas fa-chevron-circle-left"></i>
            </a>
            <Cell col={12}>
                <div className = "bannerText">
                    <h1>React Website</h1>
                    <p>Built this website using react. I hoped to create a website to display certain skills and certain projects that I could not otherwise explain 
                        in time when talking to recruitors. Another thing I hope to do is to continously update this website as my career progresses, and in turn see my
                        growth throughout the years. I used react libraries such as mdl and icons to structure the website, and learned javascript as I required functions 
                        to scroll through the projects page.
                    </p>
                </div>
            </Cell>
            </Grid>
        </div>
    )
}

export default reactWebsite;