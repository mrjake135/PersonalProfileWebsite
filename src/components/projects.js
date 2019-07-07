import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardText,CardActions,Button} from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 4 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className = "projects-grid">
                <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/2600/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover' }}>Personal Website</CardTitle>
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
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.valuecoders.com/blog/wp-content/uploads/2018/05/pythonfeatured.jpg) center / cover'}}>Webscraper</CardTitle>
                    <CardText>
                        Agoda Webscraper
                    </CardText>
                    <CardActions border>
                        <Button colored href = "https://github.com/mrjake135/WebScraper" target = "_blank" rel = "noopener noreferrer">Github</Button>
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
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.ogivetechnology.com/images/embed_edited.jpg) center / cover' }}>Rock Paper Scissors</CardTitle>
                        <CardText>
                            Rock Paper Scissors implemented using C and C++  put into an embedded system
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Learn More</Button>
                        </CardActions>
                    </Card>

                    <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.ogivetechnology.com/images/embed_edited.jpg) center / cover' }}>Tetris</CardTitle>
                        <CardText>
                            Tetris implemented using C and C++  put into an embedded system using array math
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Learn More</Button>
                        </CardActions>
                    </Card>

                    <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.ogivetechnology.com/images/embed_edited.jpg) center / cover' }}>RPG Game</CardTitle>
                        <CardText>
                            RPG game implemented using C and C++  put into an embedded system using an implemented linked list
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
                <section>
                    <Grid>
                        <Cell col={12}><div className="content">{this.toggleCategories()}</div></Cell>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default Projects;