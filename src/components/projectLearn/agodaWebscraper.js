import React from 'react';
import {Grid, Cell} from 'react-mdl'
import sampleAgodaCities from '../../images/sampleAgodaCities.png'
import sampleAgodaHotel from '../../images/sampleAgodaHotel.png'
function agodaWebscraper() {
    return(
        <div style = {{width: '100%', margin:'auto'}} className = "learn-more-inside">
        <Grid>
            <a href = "/projects" rel = "noopener noreferrer" className = "returnButton">
            <i class="fas fa-chevron-circle-left"></i>
            </a>
            <Cell col={12}>
                <div className = "bannerText">
                    <h1>Agoda Webscraper</h1>
                    <p>Created when working for www.gotadi.com, the company needed a webscraper to scrape through www.agoda.com. Without a relevant
                        API, I decided to use the beautiful soup library. In the github, there are two python files, one that generates a list of hotels
                        and the other that scrapes each individual hotel from that list of hotels. The python file that generates a list of hotels goes through
                        agoda's list of hotels based off of a city as the chosen parameter. Thus, after knowing the hotel name and which city the hotel is from,
                        the second file generates a link to scrape from, and then scrapes it. After scraping the webpage, the information is dumped into a json file,
                        and moves on until all files are scraped. Below are images of that process.
                    </p>
                </div>
            </Cell>
        </Grid>
        <Grid>
            <Cell col = {6}><img src = {sampleAgodaCities} alt = 'sample-Agoda-Cities' className = 'sample-Agoda-Cities' ></img><p>sample city json file</p></Cell>
            <Cell col = {6}><img src = {sampleAgodaHotel} alt = 'sample-Agoda-Hotel' className = 'sample-Agoda-Hotel' ></img><p>sample agoda hotel file</p></Cell>
        </Grid>    
        </div>
    )
}

export default agodaWebscraper;