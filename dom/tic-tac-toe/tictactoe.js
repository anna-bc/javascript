/**
 * Generates a playing board as a two-dimensional array (w > h) and fills it with a default value
 * @param {number} rows The width
 * @param {number} cols The height
 * @param {*} d (optional) The default value. Standard is 0
 * @returns A two-dimensional array
 */
function createBoard(rows, cols, d = 0) {
  let board = [];
  for (let x = 0; x < rows; x++) {
    board[x] = new Array(cols).fill(d);
  }
  return board;
}

((board, currentPlayer) => {
  function renderBoard(board, currentPlayer) {
    let winner = undefined;
    const $wrapper = document.querySelector(".wrapper");
    const $board = document.createElement("div");
    $board.classList.add("board");

    for (let rowIndex in board) {
      let row = board[rowIndex];

      const $row = document.createElement("div");
      $row.classList.add("board__row");
      $board.appendChild($row);

      for (let colIndex in row) {
        const $cell = document.createElement("div");
        $cell.classList.add("board__cell");
        $cell.setAttribute("id", `cell-${rowIndex}-${colIndex}`);

        $cell.addEventListener("click", function clickCell(event) {
            if (winner !== undefined) {
                return;
            }
          if (
            markCell(board, { row: rowIndex, col: colIndex }, currentPlayer)
          ) {
            updateBoard(board);
            currentPlayer = currentPlayer == 1 ? 2 : 1;0
            winner = checkWinState(board);
            console.log("Winner", winner);
            if(winner !== undefined) {
                $winnerDiv = document.createElement("div");
                $winnerDiv.classList.add("winner");
                $winnerAnnounce = document.createElement("div");
                $condAnnounce = document.createElement("div");
                $winnerDiv.appendChild($winnerAnnounce);
                $winnerDiv.appendChild($condAnnounce);
                $winnerAnnounce.innerText = `The Winner is Player ${winner.winner}`;
                $condAnnounce.innerText = `with a winning ${winner.condition}`;
                $wrapper.appendChild($winnerDiv);
                event.target.removeEventListener('click', clickCell)
            }

          }

        });

        $row.appendChild($cell);
      }
    }

    $wrapper.appendChild($board);
  }

  function markCell(board, cell, currentPlayer) {
    if (isCellEmpty(board, cell)) {
      board[cell.row][cell.col] = currentPlayer;
      return true;
    }
    return false;
  }

  function isCellEmpty(board, cell) {
    return !board[cell.row][cell.col];
  }

  function updateBoard(board) {
    for (let rowIndex in board) {
      for (let colIndex in board[rowIndex]) {
        if (board[rowIndex][colIndex]) {
          let $cell = document.getElementById(`cell-${rowIndex}-${colIndex}`);

          $cell.classList.add(
            `board__cell--player${board[rowIndex][colIndex]}`
          );
        }
      }
    }
  }

  function checkWinState(board) {
    let rowResult = checkRows();
    if(rowResult !== undefined) {
        console.log("Rows Result");
        return rowResult;
    }
    let colResult = checkColumns();
    if(colResult !== undefined) {
        console.log("Columns Result");
        return colResult;
    }
    let diagonalsResult = checkDiagonals();
    if(diagonalsResult !== undefined) {
        return diagonalsResult;
    }
    return;

  }

  function checkRows() {
    // Check the rows
    for (let rowIndex in board) {
      let allEqual = true;
      let colIndex;

      for (colIndex = 1; colIndex < board[rowIndex].length && allEqual; colIndex++) {
        allEqual = board[rowIndex][colIndex] != 0 && board[rowIndex][colIndex] === board[rowIndex][colIndex - 1];
      }

      if (allEqual) {
        return {
          winner: board[rowIndex][colIndex - 1],
          condition: "row",
          num: rowIndex,
        };
      }
    }
    return;
  }

  function checkColumns() {
    // Check the columns
    let row = board[0];

    for (colIndex = 0; colIndex < row.length; colIndex++) {
      let rowIndex = 1;
      let allEqual = true;
      for (; rowIndex < board.length && allEqual; rowIndex++) {
        allEqual =
          board[rowIndex][colIndex] != 0 &&
          board[rowIndex][colIndex] === board[rowIndex - 1][colIndex];
      }

      if (allEqual) {
        return {
          winner: board[rowIndex - 1][colIndex],
          condition: "column",
          num: colIndex,
        };
      }
    }
    return;
  }

  function checkDiagonals() {
    // Check the diagonals
    let allEqual = true;
    let i;
    for (i = 1; i < board.length && allEqual; i++) {
      allEqual = board[i][i] != 0 && board[i - 1][i - 1] === board[i][i];
    }

    if (allEqual) {
      return {winner: board[i-1][i-1], condition: "diagonal", num: i-1}
    }

    allEqual = true;
    for (i = 1; i < board.length && allEqual; i++) {
        allEqual =
          board[(board.length - 1) - i][(board.length - 1) - ((board.length - 1) - i)] != 0 &&
          board[(board.length - 1) - i][(board.length - 1) - ((board.length - 1) - i)] === board[(board.length - 1) - (i - 1)][(board.length - 1) - ((board.length - 1) - (i - 1))];
      }

      if (allEqual) {
        return { winner: board[(board.length - 1)-(i-1)][(board.length - 1)-((board.length - 1)-(i-1))], condition: "diagonal" }
      }
      return;
    }

  window.addEventListener("DOMContentLoaded", () =>
    renderBoard(board, currentPlayer)
  );
})(createBoard(3, 3), 1);
