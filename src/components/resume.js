import React from 'react';
import {Grid, Cell} from 'react-mdl';
import avatar from '../images/IMG_4618.jpg'
import Education from './education.js'
import Experience from './experience.js'

function Resume() {
    return(
        <div>
            <Grid>
                <Cell col = {4}>
                    <div style = {{textAlign: 'center'}}>
                        <img src = {avatar} alt = 'avatar' className = 'avatarImageContact' style = {{height: '250px'}} ></img>
                    </div>
                    <h2 style = {{paddingTop: '2em'}}>Khoa Phan</h2>
                    <h4 style = {{color: 'grey'}}></h4>
                    <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                    <p>I'm a computer engineer looking for opportunities in the computer engineering or software engineering field. My objective in 2020 is to secure an entry software or hardware engineering position. I have experience with web development, including front end and back end development. I also have experience with FPGA programming, low-level coding, and data collection. I'm willing to relocate and hungry to learn more.</p>
                </Cell>
                
                
                <Cell col = {8} className = "resume-right-col">
                    <h2>Education</h2>
                    <Education 
                    startYear = {"September 2016"} 
                    endYear = {"December 2020"}
                    schoolName = "Georgia Institute of Technology"
                    schoolDescription = "Bachelor of Science in Computer Engineering, GPA 3.20, Graduating with Honors"
                    />
                    <hr style = {{borderTop: '3px solid #e22947'}}></hr>
                    <h2>Experience</h2>
                    <Experience 
                    startYear = "January 2020"
                    endYear = "May 2020"
                    jobName = "Intern at Battelle"
                    jobDescription = "Worked on a variety of projects including App development with React Native, scripting with Python, machine learning with MATLAB, and Raspberry Pi prototyping"
                    />
                    <Experience 
                    startYear = "May 2019"
                    endYear = "August 2019"
                    jobName = "Intern at FPT Software"
                    jobDescription = "Learned to build and create embedded solutions, ultimately assisting in creating air-conditioning remote control"
                    />
                    <Experience 
                    startYear = "June 2018"
                    endYear = "July 2018"
                    jobName = "ID Tech Programming Instructor"
                    jobDescription = "Led introduction to Python classes for aspiring students in classes of 3-10 students from ages 10-18, and acquiring leadership/teaching skills. Further provided hands-on experience with circuit analysis including concepts such as bread-boarding and prototyping techniques, sparking early interest for children in engineering and computer science"
                    />
                    <Experience 
                    startYear = "July 2017"
                    endYear = "August 2017"
                    jobName = "Software Intern at Gotadi.com"
                    jobDescription = "Developed a web-scraper created in Python to automatically pull information from agoda.com and organize it into manageable text files using json, bs4, and request libraries, leading to automation of data collection, and learning the importance of coding in practical environments"
                    />
                    <hr style = {{borderTop: '3px solid #e22947'}}></hr>
                    <h2>Skills</h2>
                    <p>Hardware:  Bread-boarding, Logic Analyzer, Oscilloscope, FPGA board, Raspberri pi, Embedded Systems <br />
                    Software:  Java, Python (Proficient), MATLAB, HTML, CSS, Javascript, JQuery, C, C++ (Proficient), VHDL, git, FPGA Programming (Proficient), Quartus II, React Native,React <br />
                    Clubs: E-sports club, Zeta Beta Tau, Vietnamese Student Association<br />
                    Languages:  English(fluent), Vietnamese(fluent), Russian(auditory), Chinese(intermediate)<br />
                    Relevant Coursework: Logic Design, Signal Processing, Programming HW/SW systems, Circuit Analysis, Algorithms, Data Structures</p>
                    <hr style = {{borderTop: '3px solid #e22947'}}></hr>
                    <h2>Citizenship status</h2>
                    <p> Green card approved and eligible to work in the U.S</p>
                </Cell>
            </Grid>
        </div>
    )
}

export default Resume;