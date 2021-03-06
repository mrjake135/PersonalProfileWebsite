import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardText,CardActions,Button} from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
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
                        <Button colored href = "https://github.com/mrjake135/PersonalProfileWebsite" target = "_blank" rel = "noopener noreferrer">Github</Button>
                        <Button colored href="/reactwebsite">Learn More</Button>
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
                            Webscrapes through agoda.com based on city
                        </CardText>
                        <CardActions border>
                            <Button colored href = "https://github.com/mrjake135/WebScraper" target = "_blank" rel = "noopener noreferrer">Github</Button>
                            <Button colored href="/agodawebscraper">Learn More</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.valuecoders.com/blog/wp-content/uploads/2018/05/pythonfeatured.jpg) center / cover'}}>Food Expense by Map</CardTitle>
                    <CardText>
                        Plots cost of food based on location
                    </CardText>
                    <CardActions border>
                        <Button colored href = "http://mapcost.herokuapp.com/" target = "_blank" rel = "noopener noreferrer">View</Button>
                        <Button colored href="/foodexpense">Learn More</Button>
                    </CardActions>
                </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className = "projects-grid">
                    <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.ogivetechnology.com/images/embed_edited.jpg) center / cover' }}>Tetris</CardTitle>
                        <CardText>
                            Tetris implemented using C and C++  put into an embedded system using array math
                        </CardText>
                        <CardActions border>
                            <Button colored href = "https://github.com/mrjake135/TetrisEmbedded" target = "_blank" rel = "noopener noreferrer">Github</Button>
                        </CardActions>
                    </Card>

                    <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.ogivetechnology.com/images/embed_edited.jpg) center / cover' }}>RPG Game</CardTitle>
                        <CardText>
                            RPG game implemented using C and C++  put into an embedded system using an implemented linked list
                        </CardText>
                        <CardActions border>
                            <Button colored href = "https://www.youtube.com/watch?v=SeYoa9oGOAM" target = "_blank" rel = "noopener noreferrer">Youtube</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div className = "projects-grid">
                <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/4240/1*osY-DBeyp74cxJQcBQUmLA.png) center / cover'}}>Unbeatable Tic Tac Toe</CardTitle>
                    <CardText>
                        Tic Tac Toe with an unbeatable AI
                    </CardText>
                    <CardActions border>
                        <Button colored href = "https://github.com/mrjake135/TicTacToe-with-CPU" target = "_blank" rel = "noopener noreferrer">Github</Button>
                        <Button colored href="/tictactoe">Learn More</Button>
                    </CardActions>
                </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 4) {
            return (
                <div className = "projects-grid">
                <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://angelhack.com/wp-content/uploads/2019/03/ah.jpg) center / cover'}}>AngelHack Vietnam</CardTitle>
                    <CardText>
                        Loaning company solution
                    </CardText>
                    <CardActions border>
                        <Button colored href = "https://github.com/julliatran/AngelHack2019" target = "_blank" rel = "noopener noreferrer">Github</Button>
                        <Button colored href="/angelhack">Learn More</Button>
                    </CardActions>
                </Card>
                </div>
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