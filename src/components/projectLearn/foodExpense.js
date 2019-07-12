import React from 'react';
import {Grid, Cell} from 'react-mdl'

import foodgt from '../../images/foodexpensegt.png'
import foodexpensenyu from '../../images/foodexpensenyu.png'

function foodExpense() {
    return(
        <div style = {{width: '100%', margin:'auto'}} className = "learn-more-inside">
            <Grid>
                <a href = "/projects" rel = "noopener noreferrer" className = "returnButton">
                <i class="fas fa-chevron-circle-left"></i>
                </a>
                <Cell col={12}>
                    <div className = "bannerText">
                        <h1>Food Expense Map Plot</h1>
                        <p> I've always wanted to know how much food costed around me, and I've found yelp to be pretty unhelpful with that. So using Yelp's own API, 
                            I ended up creating my own solution. Yelps API allows for scraping of up to 1000 locations, however, I've reduced it to 300 with a certain
                            radius around the search. I used Mapbox to display these x and y location results, and used python's flask as a backend due to how small the
                            project was. The frontend is standard HTML/CSS. Quickly into the project I realized I didn't have to use any databases, as all I had to do was plot the information. 
                        </p>
                    </div>
                </Cell>
            </Grid>
            <Grid>
                <Cell col = {6}><img src = {foodgt} alt = 'food-cost-at-gt' className = 'food-cost-at-gt' ></img><p>Expense of food at Georgia Tech</p></Cell>
                <Cell col = {6}><img src = {foodexpensenyu} alt = 'food-cost-at-gt' className = 'food-cost-at-gt' ></img><p>Example of food at NYU</p></Cell>
            </Grid>
        </div>
    )
}

export default foodExpense;