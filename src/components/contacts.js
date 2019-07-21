import React from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import avatar from '../images/IMG_4618.jpg'
function Contacts() {
    return(
        <div className = "contact-body">
        <Grid className = "contact-grid">
            <Cell col = {6}>
                <h2>Khoa Phan</h2>
                <img src = {avatar} alt = 'avatar' className = 'avatarImageContact' style = {{height: '250px'}} ></img>
                <p style = {{width: '75%',margin:'auto',paddingTop: '1em'}}>My preferred means of communication is email.
                </p>
            </Cell>
            <Cell col = {6}>
                <div className = "contact-list"> 
                        <h2>Contact Me</h2>
                        <hr></hr>
                        <List>
                            <ListItem>
                                <ListItemContent style= {{fontSize:"25px", fontFamily: "Anton"}}>
                                    <i class="fas fa-envelope"></i>
                                    khoaphan0897@gmail.com
                                </ListItemContent>
                            </ListItem>
                        </List>
                </div>
            </Cell>
        </Grid>
    </div>
    )
}

export default Contacts;