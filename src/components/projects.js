import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl'
class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 4 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className = "projects-grid">
                <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Personal Website</CardTitle>
                    <CardText>
                        Personal Website built using React
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Learn More</Button>
                    </CardActions>
                </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div className = "projects-grid">
                <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Webscraper</CardTitle>
                    <CardText>
                        Agoda Webscraper
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored href="/agodaWebscraper">Learn More</Button>
                    </CardActions>
                </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className = "projects-grid">
                <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Rock Paper Scissors</CardTitle>
                    <CardText>
                        Agoda Webscraper
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Learn More</Button>
                    </CardActions>
                </Card>
                <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Tetris</CardTitle>
                    <CardText>
                        Agoda Webscraper
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Learn More</Button>
                    </CardActions>
                </Card>
                <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>RPG Game</CardTitle>
                    <CardText>
                        Agoda Webscraper
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Learn More</Button>
                    </CardActions>
                </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div><h1>C++</h1></div>
            )
        }
        else if (this.state.activeTab === 4) {
            return (
                <div><h1>Competitions</h1></div>
            )
        }
    }
    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Python</Tab>
                    <Tab>Embedded</Tab>
                    <Tab>C++</Tab>
                    <Tab>Competitions</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid>
                        <Cell col={12}><div className="content">{this.toggleCategories()}</div></Cell>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default Projects;