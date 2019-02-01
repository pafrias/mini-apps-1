var victoryCheck = matrix => {
  return (checkDiagonals(matrix) || checkRows(matrix) || checkCols(matrix));
}

var checkArray = row => {
  var total = row.reduce((memo, tile) => {
    if (Math.abs(memo) > 3) {
      return memo;
    } else if (memo < 0 && tile.counter > 0) {
      return 1;
    } else if (memo > 0 && tile.counter < 0) {
      return -1;
    } else {
      return memo + tile.counter;
    }
  }, 0);
  if (Math.abs(total) > 3) {
    return true;
  } else {
    return false;
  }
}

var checkDiagonals = matrix => {
  return false;
  // turn diags into arrays, checkArray
  // if no win, return false
}

var checkRows = matrix => {
  return matrix.some(row => checkArray(row));
  // checkArray on each row;
  // if no win, return false
}


var checkCols = matrix => {
  return false;
  // flip matrix, check array on each col;
  // if no win, return false
}

export default victoryCheck;