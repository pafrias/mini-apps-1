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
    var tableStyle = {
      width: '80%'
    }
    var tbodyStyle = {
      backgroundColor: 'blue',
      display: 'flex',
      flexDirection: 'column',
      border: '1px black solid'
    }
    return (
      <main>
        <div>Pablo Rules</div>
        <table>
          <tbody style={tbodyStyle}>
            {this.state.board.map(row => {
              return <BoardRow row={row} action={this.clickHandler}/>
            })}
          </tbody>
        </table>
      </main>
    );
  }

  clickHandler(e, value) {
    // console.log(e);
    // console.log(value);
    // if data = new game
    // --> new game
    // else,
    this.handleTurn(value);
  }

  handleTurn(value) {
    this.placeTile(value);
    // check for victory
    // if false and the board isnt full
    // --> allow next turn
    // if victory or board is full
    // --> endgame()
  }

  placeTile(index) {
    let turn = (this.state.turn % 2);
    let row = 5 - Math.floor(index/7);
    console.log(row);
    let col = index % 7;

    this.setState(state => {
      let board = [...state.board];
      let tile = new Tile(board[row][col].value);
      tile.active = false;
      if (turn) {
        tile.tokenStyle['backgroundColor'] = 'black';
      } else {
        tile.tokenStyle.backgroundColor = 'red';
      }
      board[row][col] = tile;
      state.turn++;
      state.board = board;
      return state;
    })
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