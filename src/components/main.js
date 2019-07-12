import React from 'react'
import LandingPage from './landingpage';
import {Switch,Route} from 'react-router-dom';
import Contacts from './contacts';
import Projects from './projects';
import Resume from './resume';
import agodaWebscraper from './projectLearn/agodaWebscraper';
import reactWebsite from './projectLearn/reactWebsite';
import foodExpense from './projectLearn/foodExpense';
function Main(){
    return(
        <Switch>
            <Route exact path ='/' component = {LandingPage}></Route>
            <Route exact path ='/aboutme' component = {LandingPage}></Route>
            <Route exact path ='/contacts' component = {Contacts}></Route>
            <Route exact path ='/projects' component = {Projects}></Route>
            <Route exact path ='/resume' component = {Resume}></Route>
            <Route exact path ='/agodaWebscraper' component = {agodaWebscraper}></Route>
            <Route exact path ='/reactWebsite' component = {reactWebsite}></Route>
            <Route exact path ='/foodExpense' component = {foodExpense}></Route>
        </Switch>
    )
 }

export default Main;