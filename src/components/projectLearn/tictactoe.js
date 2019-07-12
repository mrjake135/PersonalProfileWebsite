import React from 'react';
import {Grid, Cell} from 'react-mdl'
import tictactoeimg from '../../images/tictactoebot.png'
import tictactoecheck from '../../images/tictactoecheck.png'

function tictactoe() {
    return(
        <div style = {{width: '100%', margin:'auto'}} className = "learn-more-inside">
        <Grid>
            <a href = "/projects" rel = "noopener noreferrer" className = "returnButton">
                <i class="fas fa-chevron-circle-left"></i>
            </a>
            <Cell col={12}>
                    <h1>Unbeatable Tic Tac Toe</h1>
                    <p>Simple graphicless tic tac toe game, however, with a twist. I hoped to test out the minmax algorithm in tic tac toe, which
                        evaluates the board by checking all positions, and assigning a score to the best position by choosing the maximum victories it sees
                        itself winning and the minimum victories it sees for the opponnent. There are a maximum 9! boards in tic tac toe, or 362880, which
                        means it is definitely calculatable via recursively going through every single board by a program reasonably. When playing this, I could never 
                        win, but could only tie.
                    </p>
            </Cell>
        </Grid>
        <Grid>
            <Cell col = {6}><img src = {tictactoeimg} alt = 'tictactoe' className = 'tic-tac-toe' ></img><p>Tic Tac Toe on the terminal screen</p></Cell>
            <Cell col = {6}><img src = {tictactoecheck} alt = 'tictactoe' className = 'tic-tac-toe-check' ></img><p>Checking through all options</p></Cell>

        </Grid>
        </div>
    )
}

export default tictactoe;