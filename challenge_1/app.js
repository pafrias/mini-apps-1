const body = window.document.body;
const gameBoard = document.getElementById('game-board');


//model of board
class GameBoard {
  constructor() {
    this.board = [
      [null, null, null], 
      [null, null, null], 
      [null, null, null]
    ],
    this.toggle = this.toggle.bind(this);
  }
  //check rows and 
  winCheck() {
  }

  handleClick() {

  }

  toggle(row, col, player) {
    this.board[row][col] = player;
    this.renderBoard();
    stylize();
    addClick(this.toggle);
  }

  renderBoard() {
    gameBoard.innerHTML = '';
    for (var i = 0; i < 3; i++) {
      var row = document.createElement('tr');
      row.className = `row-${i}`;
      for (var j = 0; j < 3; j++) {
        var square = document.createElement('td');
        square.className = `col-${j}`;
        square.innerText = this.board[i][j];
        row.append(square);
      }
      gameBoard.append(row);
    }
  }
};

var stylize = () => { //make prettier
  var squares = body.getElementsByTagName('td');
  for (let square of squares) {
    square.style.width = '50px';
    square.style.height = '50px';
    square.style.border = '1px dashed black';
  }
}
var addClick = (callback) => {
  body.addEventListener('click', (event) => {
    var row = event.target.parentElement.className.slice(4);
    var col = event.target.className.slice(4);
    callback(row, col, 'X');
  })
}

var newGame = () => {
  board = new GameBoard();
  board.renderBoard();
  stylize();
  addClick(board.toggle)
}

body.addEventListener('click', (event) => {
  console.log(event.target.className.slice(4));
  console.log(event.target.parentElement.className.slice(4));
})

newGame()