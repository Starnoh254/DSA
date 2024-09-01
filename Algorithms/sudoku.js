 function solve_sudoku(board) {
  backtrack(board);
}

function find_empty(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        return [i, j];
      }
    }
  }
  return null;
}

function check(num, row, col, board, checkRow, checkCol) {
  for (let i = 0; i < 9; i++) {
    if (board[checkRow(i, row)][checkCol(i, col)] === num.toString()) {
      return false;
    }
  }
  return true;
}

function is_valid(num, row, col, board) {
  return (
    check(
      num,
      row,
      col,
      board,
      (i) => row,
      (i) => i
    ) && // Check row
    check(
      num,
      row,
      col,
      board,
      (i) => i,
      (i) => col
    ) && // Check column
    check(
      num,
      row,
      col,
      board,
      (i) => Math.floor(row / 3) * 3 + Math.floor(i / 3),
      (i) => Math.floor(col / 3) * 3 + (i % 3)
    ) // Check 3x3 grid
  );
}

function backtrack(board) {
  let empty = find_empty(board);
  if (!empty) {
    return true; // Solution found
  }

  let [row, col] = empty;

  for (let i = 1; i <= 9; i++) {
    if (is_valid(i, row, col, board)) {
      board[row][col] = i.toString();

      if (backtrack(board)) {
        return true;
      }

      // Undo the move (backtrack)
      board[row][col] = ".";
    }
  }
  return false; // Trigger backtracking
}

// let sudoku_board = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// solve_sudoku(sudoku_board);

// for (let i = 0; i < 9; i++) {
//   console.log(sudoku_board[i].join(" "));
// }

module.exports = {
  solve_sudoku
}
