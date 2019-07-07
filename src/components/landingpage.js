import React from 'react';
import {Grid,Cell} from 'react-mdl';
import avatar from '../images/IMG_4618.jpg'

function LandingPage() {
    return(
        <div style = {{width: '100%', margin:'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img src = {avatar} alt = 'avatar' className = 'avatarImage' ></img>
                </Cell>
                <div className = "bannerText">
                    <h1>Software Developer</h1>
                    <hr/>
                    <p> HTML/CSS | C++ | Python | Embed | React</p>
                    <div className = "socialLinks">
                        <a href = "https://github.com/mrjake135" rel = "noopener noreferrer" target = "_blank">
                            <i class="fab fa-github-square" aria-hidden = "true"></i>
                        </a>
                        <a href = "https://www.youtube.com/channel/UCPI_iJjCmo9BJddETz83_zA?view_as=subscriber" rel = "noopener noreferrer" target = "_blank">
                            <i class="fab fa-youtube-square" aria-hidden = "true"></i>
                        </a>
                        <a href = "https://www.linkedin.com/in/khoa-phan-38b281138/" rel = "noopener noreferrer" target = "_blank">
                            <i class="fab fa-linkedin" aria-hidden = "true"></i>
                        </a>
                    </div>
                </div>
            </Grid>
        </div>
    )
}

export default LandingPage;