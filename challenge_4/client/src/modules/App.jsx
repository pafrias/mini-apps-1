import GameBoard from './GameBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      gameover: false,
      turn: 1 // can't get above 42
    }
  }

  render() {
    return (
      <main>
        <div>Pablo Rules</div>
        <GameBoard />
      </main>
    )
  }

  initialize() { //?
    
  }

  checkVictory() {
    // check rows
    // check cols
    // check diags
  }

}

export default App;