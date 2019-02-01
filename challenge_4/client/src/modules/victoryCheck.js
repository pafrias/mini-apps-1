var victoryCheck = matrix => {
  return (checkDiagonals(matrix) || checkRows(matrix) || checkCols(matrix));
}

var checkDiagonals = matrix => {
  // turn diags into arrays, checkArray
  // if no win, return false
}

var checkArray = row => {
  return false;
  // go through each row;
  // if no win, return false
}

var checkRows = matrix => {
  return false;
  // checkArray on each row;
  // if no win, return false
}


var checkCols = matrix => {
  return false;
  // flip matrix, check array on each col;
  // if no win, return false
}


// return false, refactor later to 
export default victoryCheck;