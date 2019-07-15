import React from 'react'
import LandingPage from './landingpage';
import {Switch,Route} from 'react-router-dom';
import Contacts from './contacts';
import Projects from './projects';
import Resume from './resume';
import agodaWebscraper from './projectLearn/agodaWebscraper';
import reactWebsite from './projectLearn/reactWebsite';
import foodExpense from './projectLearn/foodExpense';
import angelHack from './projectLearn/angelHack';
import tictactoe from './projectLearn/tictactoe';
function Main(){
    return(
        <Switch>
            <Route exact path ='/' component = {LandingPage}></Route>
            <Route path ='/aboutme' component = {LandingPage}></Route>
            <Route path ='/contacts' component = {Contacts}></Route>
            <Route path ='/projects' component = {Projects}></Route>
            <Route path ='/resume' component = {Resume}></Route>
            <Route path ='/agodawebscraper' component = {agodaWebscraper}></Route>
            <Route path ='/reactwebsite' component = {reactWebsite}></Route>
            <Route path ='/foodexpense' component = {foodExpense}></Route>
            <Route path ='/angelhack' component = {angelHack}></Route>
            <Route path ='/tictactoe' component = {tictactoe}></Route>

        </Switch>
    )
 }

export default Main;