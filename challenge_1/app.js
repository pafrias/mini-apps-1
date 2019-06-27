
//model of board
class TicTacToeBoard {
  constructor() {
    this.clickHandler = this.clickHandler.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.boardNode = document.getElementById('game_board');
  }
  
  /**
   * @description renders the Tic Tac Toe Board to the DOM
   */
  resetBoard() {
    this.playerOneTurn = true;
    this.board = [
      [null, null, null], 
      [null, null, null], 
      [null, null, null]
    ];
    this.boardNode.innerHTML = '';
    for (var i = 0; i < 3; i++) {
      var row = document.createElement('tr');
      row.id = `row-${i}`;
      for (var j = 0; j < 3; j++) {
        var square = document.createElement('td');
        square.className = `${i}_${j} active`;
        square.addEventListener('click', this.clickHandler)
        row.append(square);
      }
      this.boardNode.append(row);
    }
  }

  /**
   * @description handles DOM input, detecting active elements and parsing
   * row and column data
   * @param {Event} e click event
   */
  clickHandler(e) {
    const divClass = e.target.classList;
    if (divClass[1] === 'active') {
      const [row, col] = divClass[0].split('_');
      this.updateBoard(row, col, e.target);
      this.checkBoard();
    }
  }

  /**
   * @description updates board modal and dom
   * @param {index} row 
   * @param {index} col 
   * @param {DOM Element} node
   */
  updateBoard(row, col, node) {
    this.board[row][col] = this.playerOneTurn ? 1 : -1;
    node.innerText = this.playerOneTurn ? 'X' : 'O';
    node.className = `${row}_${col}`;
  }

  /**
   * @description checks rows, columns and diagonals for 3 in a row
   */
  checkBoard() {
    if (this.checkRows() || this.checkCols() || this.checkDiagonals()) {
      const winner = this.playerOneTurn ? 'ONE' : 'TWO';
      this.gameOver(`PLAYER ${winner} VICTORY!`);
    } else if (this.board.every(row => row.every(value => value !== null))) {
      this.gameOver('DRAW');
    } else {
      this.playerOneTurn = !this.playerOneTurn;
    }
  }

  checkRows() {
    for (let row of this.board) {
      var total = 0;
      for (let i = 0; i < this.board.length; i++ ) {
        total += row[i]
      }
      if (total === 3 || total === -3) {
        return true;
      }
    }
    return false;
  }

  checkCols() {
    for (var i = 0; i < this.board.length; i++) {
      var total = 0;
      for (var j = 0; j < this.board.length; j++) {
        total += this.board[j][i];
      }
      if (total === 3 || total === -3) {
        return true;
      }
    }
    return false;
  }

  checkDiagonals() {
    var total = 0;
    for (var i = 0; i < this.board.length; i++) {
      total += this.board[i][i];
    }
    if (total === 3 || total === -3) {
      return true;
    }
    total = 0;

    for (var i = 0; i < this.board.length; i++) {
      total += this.board[i][2-i];
    }
    if (total === 3 || total === -3) {
      return true;
    }
    return false;
  }

  gameOver(messageString) {
    for (let div of document.getElementsByClassName('active')) {
      div.classList = div.classList[0];
    }
    var message = document.createElement('h1');
    message.innerText = messageString;
    document.getElementById('header').appendChild(message);
    document.getElementById('new_game').className = 'active';
    document.getElementById('new_game').addEventListener('click', () => {
      document.getElementById('header').removeChild(message);
      document.getElementById('new_game').className = '';
      this.resetBoard();
    });
  }
}

var newGame = () => {
  var board = new TicTacToeBoard();
  board.resetBoard();
}

newGame();