import React from 'react'
import LandingPage from './landingpage';
import {Switch,Route} from 'react-router-dom';
import AboutMe from './aboutme';
import Contacts from './contacts';
import Projects from './projects';
import Resume from './resume';
import agodaWebscraper from './agodaWebscraper';

function Main(){
    return(
        <Switch>
            <Route exact path ='/' component = {LandingPage}></Route>
            <Route exact path ='/aboutme' component = {AboutMe}></Route>
            <Route exact path ='/contacts' component = {Contacts}></Route>
            <Route exact path ='/projects' component = {Projects}></Route>
            <Route exact path ='/resume' component = {Resume}></Route>
            <Route exact path ='/agodaWebscraper' component = {agodaWebscraper}></Route>
        </Switch>
    )
 }

export default Main;