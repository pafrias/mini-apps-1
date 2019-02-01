import React from 'react';
import BoardRow from './BoardRow.jsx';
import victoryCheck from './victoryCheck.js';
import Tile from './Tile.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      gameover: false,
      turn: 1
      // if turn is odd, black's turn
      // if turn is even, red's turn
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  render() {
    console.log('rendering');
    return (
      <main>
        <div>Pablo Rules</div>
        <table>
          {this.state.board.map(row => {
            return <BoardRow row={row} action={this.clickHandler}/>
          })}
        </table>
      </main>
    );
  }

  clickHandler(e) {
    // if data = new game
    // --> new game
    // else,
    // turnHandler
  }

  turnHandler() {
    // placeTile()
    // check for victory
    // if false and the board isnt full
    // --> allow next turn
    // if victory or board is full
    // --> endgame()
  }

  placeTile() {
    // toggle piece on this.state.board
    // --> active becomes false
    // --> color becomes red or black depending on turn number
    
  }

  endGame() {
    // --> deactivate all tiles
    // --> print gameover
    // --> show button for new game
  }

  initialize() {
    var state = {
      board: [],
      gameover: false,
      turn: 1
    };
    for (var i = 0; i < 42; i++) {
      if (i % 7 === 0) {
        state.board.unshift([]);
      }
      var node = new Tile(i);
      state.board[0].push(node);
    }

    this.setState(() => {
      console.log('initialized');
      return state;
    })
  }

  componentDidMount() {
    this.initialize();
  }

  /*

  post('victor') {
    // post victory data to server
  }

  fetch() {
    // get red/black victory data
    // display over board
  }

  gravity() {

  }

  */



}

export default App;