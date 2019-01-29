const body = window.document.body;
const gameBoard = document.getElementById('game-board');

//model of board
class TicTacToeBoard {
  constructor() {
    this.board = [
      [null, null, null], 
      [null, null, null], 
      [null, null, null]
    ],
    this.playerOneTurn = true;
    this.gameOver = false;
    this.toggle = this.toggle.bind(this);
  }
  
  displayBoard() {
    gameBoard.innerHTML = '';
    for (var i = 0; i < 3; i++) {
      var row = document.createElement('tr');
      row.className = `row-${i}`;
      for (var j = 0; j < 3; j++) {
        var square = document.createElement('td');
        square.className = `col-${j}`;
        if (this.board[i][j] === 1) {
          square.innerText = 'X';
        } else if (this.board[i][j] === - 1) {
          square.innerText = '0';
        } else {
          square.className = `col-${j} active`;
        }
        row.append(square);
      }
      gameBoard.append(row);
    }
  }

  toggle(row, col) {
    if (this.playerOneTurn) {
      this.board[row][col] = 1;
      this.playerOneTurn = false;
    } else {
      this.board[row][col] = -1;
      this.playerOneTurn = true;
    }
    this.displayBoard();
    stylize();
    this.checkBoard();
  }

  checkBoard() {
    if (this.checkRows() || this.checkCols() || this.checkDiagonals()) {
      var gameOver = document.createElement('h1');
      gameOver.className = 'game-over';
      gameOver.innerText = 'GAME OVER';
      body.getElementsByTagName('header')[0].appendChild(gameOver);
      document.getElementById('new-game').innerText = 'New Game?';
      document.getElementById('new-game').addEventListener('click', () => {
        var ttt = document.createElement('h1');
        ttt.innerText = 'Tic Tac Toe';
        body.getElementsByTagName('header')[0].innerHTML = '';
        body.getElementsByTagName('header')[0].appendChild(ttt);
        document.removeChild
        newGame();
      })
    } else {
      addClick(this.toggle);
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
    } else {
      total = 0;
    }
    for (var i = 0; i < this.board.length; i++) {
      total += this.board[i][2-i];
    }
    if (total === 3 || total === -3) {
      return true;
    }
    return false;
  }

}

var stylize = () => { //make prettier
  var squares = body.getElementsByTagName('td');
  for (let square of squares) {
    square.style.width = '50px';
    square.style.height = '50px';
    square.style.border = '1px dashed black';
  }
  document.getElementById('new-game').innerText = '';
}
var addClick = (callback) => {
  var squares = body.getElementsByClassName('active');
  for (let square of squares) {
    square.addEventListener('click', (event) => {
      var row = event.target.parentElement.className.slice(4,5);
      var col = event.target.className.slice(4,5);
      callback(row, col);
    })
  }
}
var newGame = () => {
  var board = new TicTacToeBoard();
  board.displayBoard();
  stylize();
  addClick(board.toggle);
}

newGame();