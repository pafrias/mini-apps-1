
//model of board
class TicTacToeBoard {
  constructor(rootNode) {
    this.board = [
      [null, null, null], 
      [null, null, null], 
      [null, null, null]
    ];
    this.playerOneTurn = true;
    this.toggleSquare = this.toggleSquare.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.root = rootNode || document.getElementById('game_board');
  }
  
  /**
   * @description renders the Tic Tac Toe Board to the DOM
   */
  startGame() {
    this.root.innerHTML = '';
    let table = document.createElement('table');
    let button = document.createElement('button');
    for (var i = 0; i < 3; i++) {
      var row = document.createElement('tr');
      row.id = `row-${i}`;
      for (var j = 0; j < 3; j++) {
        var square = document.createElement('td');
        square.className = `${i}_${j} active`;
        square.addEventListener('click', this.toggleSquare)
        row.append(square);
      }
      table.append(row);
    }
    button.id = 'new_game';
    button.type = 'button';
    // add type?
    this.root.append(table);
    this.root.append(button);
  }

  /**
   * @description handles DOM input, detecting active elements and parsing
   * row and column data
   * @param {Event} e click event
   */
  toggleSquare(e) {
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
    if (total === 3 || total === -3) { return true; }

    total = 0;

    for (var i = 0; i < this.board.length; i++) {
      total += this.board[i][2-i];
    }
    if (total === 3 || total === -3) { return true; }
    return false;
  }

  gameOver(messageString) {
    this.board = [
      [null, null, null], 
      [null, null, null], 
      [null, null, null]
    ];
    this.playerOneTurn = true;
    const remainingSquares = document.getElementsByClassName('active');
    while (remainingSquares.length) {
      const div = remainingSquares[0];
      div.className = '';
    }
    const banner = document.getElementById('game_over');
    const button = document.getElementById('new_game');
    banner.innerText = messageString;
    button.className = 'active';
    button.innerText = 'New Game?';
    document.getElementById('new_game').addEventListener('click', () => {
      banner.innerText = '';
      button.className = '';
      button.innerText = '';
      this.startGame();
    });
  }
}